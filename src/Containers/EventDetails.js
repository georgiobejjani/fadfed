import React from 'react';
import { useParams } from 'react-router-dom';
import calendarIcon from '../assets/calendar.png';

export default function EventDetails() {
    const { id } = useParams();
    const event = [{
        id: 1,
        title: 'Mothers day',
        description: "In light of Mother’s Day and the “Self Love” awareness program, it was a privilege for Fadfed - Release to share a series of awareness sessions to mothers and students at the Secondary Evangelical School in Zahle - Lebanon, accentuating on the importance of self care and love. During session work, it was emphasized that children of all ages should be aware that self love is key to fight and keep going, while taking full support from their mothers who have a vital role in parenting and psychosocial support. Mothers and parents also need to take care of their mental health as well, in order to insure continuity and prosperity. Together, mental health stigma is beatable, one step at a time!",
        time: '21/3/2024'
    }, {
        id: 2,
        title: 'Awarness session',
        description: 'An awareness session was held by Fadfed/Release at Body In Motion center - Zahle Bekaa Lebanon concerning the different aspects of bullying at all stages in childhood, teenage years and adulthood.',
        time: '20/6/2024'
    },{
        id: 3,
        title: 'Chouaa Al Amal',
        description: 'Zahle hosts a self-care and well being session with their dedicated teachers and monitors',
        time: '20/7/2024'
    }];
    const eventItem = event.find(event => event.id === parseInt(id));
    return (
        <>
            <div className="event-detail">
                <h1 className="event-detail-title">{eventItem.title}</h1>
                <p className="event-detail-description">{eventItem.description}</p>
                <span className="event-detail-time"><img src={calendarIcon} alt='calendarIcon' className='newsCard__icon' />{eventItem.time}</span>
            </div>
        </>
    );
}
