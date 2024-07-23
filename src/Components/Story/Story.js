import React from 'react'
import './Story.css';

export default function Story({paragraph}) {
  return (
    <div className='fullContainer'>
        <h4 className='StorySubTitle'>Who We Are</h4>
        <h2 className='StoryTitle'>Our Story</h2>
        <p className='StoryText'>{paragraph}</p>
    </div>
  )
}
