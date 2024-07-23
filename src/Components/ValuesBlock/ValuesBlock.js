import React from 'react'
import './ValuesBlock.css';

export default function ValuesBlock({ side, icon, title, text,background,count }) {
    return (
        <div className={side === 'right' ? 'valueBlock rightSide' : 'valueBlock leftSide'}>
            <div className={side === 'right' ? 'thumbPart rightThumb' : 'thumbPart leftThumb'} style={{background:background}}/>
            <div className={side === 'right' ? 'valuesData notReversed' : 'valuesData reversed'}>
                <h1 className='values__count'>{count}</h1>
                <div className='values__separator' />
                <img className='values__img' src={icon} alt='icon values' />
                <div className='values-content'>
                    <h1 className='values__title'>{title}</h1>
                    <p className='values__parag'>{text}</p>
                </div>
            </div>
        </div>
    )
}
