import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SubjectIcon from '@material-ui/icons/Subject';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function BigCalendar() {
  const classes = useStyles();

  const [events, setEvents] = useState({
    eventsList: [],
    rawEvents: [],
    eventsLoaded: false
  });

  const [startDate, setStartdate] = useState(moment(new Date()).subtract(2, "months").startOf('month').format("YYYY-MM-DDTHH:mm:ssZ"));
  const [endDate, setEnddate] = useState(moment(new Date()).add(2, "months").endOf('month').format("YYYY-MM-DDTHH:mm:ssZ"));
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const getEvents = async () => {
    try {
      let timeMin = `timeMin=${startDate}`;
      let timeMax = `timeMax=${endDate}`;
      const baseUrl = `https://www.googleapis.com/calendar/v3/calendars/${process.env.REACT_APP_GOOGLE_ACCOUNT_NAME}/events`
      let URL = encodeURI(baseUrl + `?key=${process.env.REACT_APP_GOOGLE_CLIENT_API_KEY}&${timeMin}&${timeMax}`);
      let res = await fetch(URL, { mode: 'cors' });
      res = await res.json();
      let rawEvents = res.items
      if (typeof rawEvents !== 'undefined') {
        let eventsList = rawEvents.map(dataItem => {
          let startDateTime, endDateTime = null;
          let val1 = 0, val2 = 0, val3 = 0;
          if (dataItem.start.date) {
            val1 = parseInt(dataItem.start.date.split('-')[2]);
            val2 = parseInt(dataItem.end.date.split('-')[2]);
            val3 = val1 - val2;
            startDateTime = `${dataItem.start.date} 00:00:00`;
            endDateTime = `${dataItem.end.date} 00:00:00`;
          } else {
            startDateTime = (dataItem.start.dateTime && dataItem.start.dateTime.includes('T')) ? dataItem.start.dateTime : `${dataItem.start.dateTime}T00:00:00Z`;
            endDateTime = (dataItem.end.dateTime && dataItem.end.dateTime.includes('T')) ? dataItem.end.dateTime : `${dataItem.end.dateTime}T23:59:59Z`;
          }

          return {
            id: dataItem.id,
            title: dataItem.summary,
            start: new Date(startDateTime),
            end: new Date(endDateTime),
            allDay: (dataItem.start.dateTime) ? false : true,
            multiDay: (val3 > 1 || val3 < -1) ? true : false
          }
        })
        console.log(eventsList);
        setEvents({ eventsList, rawEvents, eventsLoaded: true });
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (!events.eventsLoaded) {
      getEvents();
    }
  });

  const onSelectEvent = (event) => {
    const rawEvent = events.rawEvents.find(dataItem => dataItem.id === event.id);
    setSelectedEvent({ ...rawEvent, multiDay: event.multiDay });
    setOpen(true);
  }

  const convertTimeStamp = (timeStamp) => {
    if ((timeStamp && timeStamp.includes('T'))) {
      return moment(timeStamp).format('LLLL')
    } else {
      return `${moment(timeStamp).format('MM/DD/YYYY')} All Day`
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  const onRangeChange = (data) => {
    if (events.eventsLoaded) {
      setStartdate(moment(data.start).subtract(2, "months").startOf('month').format("YYYY-MM-DDTHH:mm:ssZ"));
      setEnddate(moment(data.end).add(2, "months").endOf('month').format("YYYY-MM-DDTHH:mm:ssZ"));
      getEvents();
    }
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events.eventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={onSelectEvent}
        onRangeChange={onRangeChange}
        className={classes.root}
      />

      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Event Info</DialogTitle>

        <List aria-label="event information">
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EventIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={selectedEvent.summary} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccessTimeIcon />
              </Avatar>
            </ListItemAvatar>
            {
              (selectedEvent?.start?.date) ?
                <ListItemText primary={convertTimeStamp(selectedEvent?.start?.date)} />
                :
                <ListItemText primary={convertTimeStamp(selectedEvent?.start?.dateTime)} />
            }
          </ListItem>
          {(selectedEvent?.multiDay) ? (
            <ListItem>
              <ListItemIcon>
                &nbsp;
              </ListItemIcon>
              {
                (selectedEvent?.end?.date) ?
                  <ListItemText primary={convertTimeStamp(selectedEvent?.end?.date)} />
                  :
                  <ListItemText primary={convertTimeStamp(selectedEvent?.end?.dateTime)} />
              }
            </ListItem>)
            :
            null}
          {(selectedEvent.location && selectedEvent.location !== '') ? (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={selectedEvent.location} />
            </ListItem>)
            :
            null}
          {(selectedEvent.description && selectedEvent.description !== '') ? (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SubjectIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={selectedEvent.description} />
            </ListItem>)
            :
            null}
        </List>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}