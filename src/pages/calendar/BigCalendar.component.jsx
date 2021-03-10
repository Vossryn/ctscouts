import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import EventIcon from '@material-ui/icons/Event';
import CloseIcon from '@material-ui/icons/Close';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SubjectIcon from '@material-ui/icons/Subject';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const useStyles = makeStyles(theme => ({
    dialogTitle: {
        padding: "30px 24px"
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
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
                    if(dataItem.start.date){
                        startDateTime = `${dataItem.start.date} 00:00:00`;
                    }
                    if(dataItem.start.dateTime){
                        startDateTime = (dataItem.start.dateTime && dataItem.start.dateTime.includes('T')) ? dataItem.start.dateTime : `${dataItem.start.dateTime}T00:00:00Z`;
                    }
                    if(dataItem.end.date){
                        endDateTime = `${dataItem.end.date} 23:59:59`;
                    }
                    if(dataItem.end.dateTime){
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
        console.log(rawEvent)
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
            />

            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title" className={classes.dialogTitle}>
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <List aria-label="event information">
                        <ListItem>
                            <ListItemIcon>
                                <EventIcon />
                            </ListItemIcon>
                            <ListItemText primary={(selectedEvent.summary) ? selectedEvent.summary : ''} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <AccessTimeIcon />
                            </ListItemIcon>
                            <ListItemText primary={(selectedEvent.start) ? convertTimeStamp(selectedEvent.start.dateTime) : ''} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                &nbsp;
                        </ListItemIcon>
                            <ListItemText primary={(selectedEvent.end) ? convertTimeStamp(selectedEvent.end.dateTime) : ''} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText primary={(selectedEvent.location) ? selectedEvent.location : ''} />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SubjectIcon />
                            </ListItemIcon>
                            <ListItemText primary={(selectedEvent.description) ? selectedEvent.description : ''} />
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
        </div>
    )
}