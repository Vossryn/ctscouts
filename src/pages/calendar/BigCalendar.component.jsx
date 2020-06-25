import React, { useState, useEffect } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function BigCalendar() {

    const [events, setEvents] = useState({ eventsList: [], eventsLoaded: false });
    const [startDate, setStartdate] = useState(moment(new Date()).subtract(2, "months").startOf('month').format("YYYY-MM-DDTHH:mm:ssZ"));
    const [endDate, setEnddate] = useState(moment(new Date()).add(2, "months").endOf('month').format("YYYY-MM-DDTHH:mm:ssZ"));

    const ACCOUNT = "croatantrails@gmail.com";

    const getEvents = () => {
        let apiKey = `key=AIzaSyAL7eMleMrCrsGO6jsqRmHoAxxB-c_x1ZA`;
        let timeMin = `timeMin=${startDate}`;
        let timeMax = `timeMax=${endDate}`;
        let URL = encodeURI(`https://content.googleapis.com/calendar/v3/calendars/${ACCOUNT}/events?singleEvents=true&${apiKey}&${timeMin}&${timeMax}`);
        console.log(URL);
        fetch(URL)
            .then(res => res.json())
            .then(res => {
                let events = res.items.map(dataItem => {
                    let startDateTime = (dataItem.start.dateTime && dataItem.start.dateTime.includes('T')) ? dataItem.start.dateTime : `${dataItem.start.dateTime}T00:00:00Z`
                    let endDateTime = (dataItem.end.dateTime && dataItem.end.dateTime.includes('T')) ? dataItem.end.dateTime : `${dataItem.end.dateTime}T23:59:59Z`
                    return {
                        id: dataItem.id,
                        title: dataItem.summary,
                        start: new Date(startDateTime),
                        end: new Date(endDateTime),
                        allDay: (dataItem.start.dateTime && !dataItem.start.dateTime.includes('T'))
                    }
                })
                console.log(events);
                setEvents({ eventsList: events, eventsLoaded: true });
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (!events.eventsLoaded) {
            getEvents();
        }
    });

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events.eventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}