import React from 'react'
import './NewsCard.css';
import calendarIcon from '../../assets/calendar.png';

export default function NewsCard({ eventTitle, eventContent, dateAndTime,id }) {
  // Function to truncate text to a specified word count
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  console.log('id',id)

  return (
    <div className='newsCard'>
      <h2 className='newsCard__title'>{eventTitle}</h2>
      <p className='newsCard__content'>
      {truncateText(eventContent, 30)}
        {eventContent.split(' ').length > 30 && (
          <a href={`/event/${id}`} className="read-more">Read More</a>
        )}
      </p>
      <span className='newsCard__date'>
        <img src={calendarIcon} alt='calendarIcon' className='newsCard__icon'/>{dateAndTime}</span>
    </div>
  )
}
