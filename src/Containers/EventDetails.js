import React from 'react';
import { useParams } from 'react-router-dom';
import calendarIcon from '../assets/calendar.png';

export default function EventDetails() {
    const { id } = useParams();
    // Fetch the event details based on the id (here we use hardcoded data for simplicity)
    const event = {
        id: 1,
        title: 'Event Title',
        description: 'Full description of the event goes here. This includes all the details and content that you want to display on this Full description of the event goes here. This includes all the details and content that you want to display on this Full description of the event goes here. This includes all the details and content that you want to display on thisFull description of the event goes here. This includes all the details and content that you want to display on this page. page.page.page.',
        time: '12 Dec, 12:00 AM'
    };

    return (
        <>
        <div className="event-detail">
            <h1 className="event-detail-title">{event.title}</h1>
            <p className="event-detail-description">{event.description}</p>
            <span className="event-detail-time"><img src={calendarIcon} alt='calendarIcon' className='newsCard__icon'/>{event.time}</span>
        </div>
        </>
    );
}
