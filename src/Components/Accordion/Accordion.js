import React, { useState, useRef } from 'react';
import './Accordion.css';

const Accordion = ({ title, children,style }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='accordion'>
            <button className={style === 'white' ? "accordion-btn white" : "accordion-btn"} onClick={toggleAccordion}>
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                ref={contentRef}
                className={`accordion-content ${isOpen ? 'open' : ''} `}
                style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
