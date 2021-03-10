import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
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
          let startDateTime, endDateTime;
          if (dataItem.start.date) {
            startDateTime = `${dataItem.start.date} 00:00:00`;
          }
          if (dataItem.start.dateTime) {
            startDateTime = (dataItem.start.dateTime && dataItem.start.dateTime.includes('T')) ? dataItem.start.dateTime : `${dataItem.start.dateTime}T00:00:00Z`;
          }
          if (dataItem.end.date) {
            endDateTime = `${dataItem.end.date} 23:59:59`;
          }
          if (dataItem.end.dateTime) {
            endDateTime = (dataItem.end.dateTime && dataItem.end.dateTime.includes('T')) ? dataItem.end.dateTime : `${dataItem.end.dateTime}T23:59:59Z`;
          }
          return {
            id: dataItem.id,
            title: dataItem.summary,
            start: new Date(startDateTime),
            end: new Date(endDateTime),
            allDay: (dataItem.start.dateTime && !dataItem.start.dateTime.includes('T'))
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
    setSelectedEvent(rawEvent);
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
        <DialogContent dividers>
          <List aria-label="event information">
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EventIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={(selectedEvent.summary) ? selectedEvent.summary : ''} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <AccessTimeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={(selectedEvent.start) ? convertTimeStamp(selectedEvent.start.dateTime) : ''} />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                &nbsp;
              </ListItemIcon>
              <ListItemText primary={(selectedEvent.end) ? convertTimeStamp(selectedEvent.end.dateTime) : ''} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationOnIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={(selectedEvent.location) ? selectedEvent.location : ''} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <SubjectIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={(selectedEvent.description) ? selectedEvent.description : ''} />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}