import React from 'react'
import Accordion from '../Components/Accordion/Accordion'
import TextBlock from '../Components/TextBlock/TextBlock';
import ngo1 from '../assets/ngo1.avif';
import ngo2 from '../assets/ngo2.avif';
import ngo3 from '../assets/ngo3.avif';
import Story from '../Components/Story/Story';
import ValuesBlock from '../Components/ValuesBlock/ValuesBlock';
import WorkCard from '../Components/WorkCard/WorkCard';
import iconTest from '../assets/photo_13241035 (1).png';
import NewsCard from '../Components/NewsCard/NewsCard';
export default function Homepage() {

    const mission =
        <>
            <span>
                <b>Here to Hear – Defeating Stigma</b> is a comprehensive project focused at
                addressing our community's urgent need for mental health services,
                support, and awareness.
                <div className='accordionContainer'>
                    <Accordion title="Mental Health Support & Awareness">
                        <ul>
                            <li>Our NGO is committed to promoting a healthier, more resilient community through a combination of free psychiatric and psychological sessions, a suicide hotline, and awareness programs in schools, colleges or any form of social group or gathering.</li>
                            <li>The aim is to address the growing need for mental health support, raise
                                awareness about mental health issues, reduce stigma, and provide
                                accessible services to individuals experiencing mental health challenges.</li>
                        </ul>
                    </Accordion>
                </div>
            </span>
        </>

    const vision = <>
        <span>
            <b>Fadfed/Release </b>envisions breaking barriers concerning mental health stigma, to create a better world.
        </span>
        <div className='accordionContainer'>
            <Accordion title="Goals and Impact">
                <ul>
                    <li>Provide accessible mental health support to individuals who may otherwise lack resources or awareness.</li>
                    <li>Reduce stigma surrounding mental health through education and open dialogue.</li>
                    <li>Contribute to a decrease in suicide rates by offering immediate assistance and hope to those in crisis.</li>
                    <li>Foster a culture of emotional well-being, resilience, and empathy within schools, universities, and the broader community.</li>
                </ul>
            </Accordion>
            <Accordion title="Sustainability">
                <ul>
                    <li>The program will seek funding through grants, donations, and partnerships with corporate and philanthropic organizations.</li>
                    <li>Engaging volunteers from the mental health field will help maximize resources while maintaining high-quality services.</li>
                    <li>Data collection and impact assessment will provide valuable insights for continuous improvement and future program expansion.</li>
                </ul>
            </Accordion>
        </div>
    </>

    const whoWeAre = <>
        <span><b>RELEASE</b> is a non-profit organization which works to raise awareness in mental health around Lebanon, dedicated to save lives by providing needed treatment and care for people that can’t afford it and give people the mental health resources they need all the way to break down mental health stigma.</span>
    </>

    const Values = [
        {
            gradient: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
            title: 'Compassion',
            text: 'Showing empathy and kindness towards individuals experiencing mental health challenges is crucial in fostering a supportive environment.',
            side: 'right',
        },
        {
            gradient: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)',
            title: 'Empowerment',
            text: 'Empowering individuals to take control of their mental health journey through education, resources, and support enhances their sense of agency and resilience.',
            side: 'left',
        },
        {
            gradient: 'linear-gradient(135deg, #00f260 0%, #0575e6 100%)',
            title: 'Dignity',
            text: 'Respecting the inherent worth and dignity of each person, regardless of their mental health status, promotes inclusivity and reduces stigma.',
            side: 'right',
        },
        {
            gradient: 'linear-gradient(135deg, #f2709c 0%, #ff9472 100%)',
            title: 'Integrity',
            text: 'Upholding honesty and ethical behavior in all interactions builds trust with clients, partners, and the community at large.',
            side: 'left',
        },
        {
            gradient: 'linear-gradient(135deg, #36d1dc 0%, #5b86e5 100%)',
            title: 'Collaboration',
            text: 'Working collaboratively with clients, families, communities, and other stakeholders ensures holistic care and comprehensive support systems.',
            side: 'right',
        },
        {
            gradient: 'linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)',
            title: 'Resilience',
            text: 'Encouraging resilience in clients and staff alike helps navigate challenges and setbacks inherent in mental health recovery and advocacy efforts.',
            side: 'left',
        },
        {
            gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            title: 'Inclusivity',
            text: 'Embracing diversity in all its forms ensures that services and support are accessible and relevant to all individuals, regardless of background or identity.',
            side: 'right',
        },
        {
            gradient: 'linear-gradient(135deg, #f7ff00 0%, #db36a4 100%)',
            title: 'Quality',
            text: 'Committing to high standards of care, continuous improvement, and evidence-based practices ensures effective and impactful services.',
            side: 'left',
        },
        {
            gradient: 'linear-gradient(135deg, #1e9600 0%, #fff200 100%)',
            title: 'Advocacy',
            text: 'Advocating for policies and practices that promote mental health awareness, access to services, and destigmatization strengthens the broader community\'s support network.',
            side: 'right',
        },
        {
            gradient: 'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
            title: 'Hope',
            text: 'Instilling hope in clients by emphasizing recovery, growth, and the potential for positive change encourages engagement and motivation in their mental health journeys.',
            side: 'left',
        }
    ];

    return (
        <>
            <h1 className='latestNews'>Our Values</h1>
            <div className='valuesContainer' id='valuesContainer'>
                {Values && Values.map((value, index) => {
                    return (
                        <ValuesBlock background={value.gradient} side={value.side} icon={iconTest} title={value.title} text={value.text} count={index + 1} />
                    )
                })}
            </div>
            <div id='ourStory'>
                <Story paragraph={whoWeAre} />
            </div>
            <div className='container'>
                <div className='imageBlock'>
                    <div class="grid-container">
                        <div class="grid-item item1"><img src={ngo1} alt="Donation 1" /></div>
                        <div class="grid-item item2"><img src={ngo2} alt="Donation 2" /></div>
                        <div class="grid-item item3"><img src={ngo3} alt="Donation 3" /></div>
                    </div>
                    <div className='visionContent'>
                        <TextBlock
                            introTitle="What We Do"
                            title="Our Mission"
                            content={mission}
                        />
                    </div>
                </div>
                <div className='imageBlock reversed'>
                    <img src={ngo2} className='imageBlock__image' alt='img' />
                    <div className='visionContent'>
                        <TextBlock
                            introTitle="What We Want"
                            title="Our Vision"
                            content={vision}
                        />
                    </div>
                </div>
            </div>
            <div className='fullContainer' id='ourWork'>
                <WorkCard />
            </div>
            <h1 className='latestNews'>Latest News</h1>
            <div className='newsCards' id='latestNews'>
                <NewsCard eventTitle='Mothers day' eventContent="In light of Mother’s Day and the “Self Love” awareness program, it was a privilege for Fadfed - Release to share a series of awareness sessions to mothers and students at the Secondary Evangelical School in Zahle - Lebanon, accentuating on the importance of self care and love.
During session work, it was emphasized that children of all ages should be aware that self love is key to fight and keep going, while taking full support from their mothers who have a vital role in parenting and psychosocial support. Mothers and parents also need to take care of their mental health as well, in order to insure continuity and prosperity.
Together, mental health stigma is beatable, one step at a time!" dateAndTime="21/3/2024" id='1' />
                <NewsCard eventTitle='Awarness Session' eventContent="An awareness session was held by Fadfed/Release at Body In Motion center - Zahle Bekaa Lebanon concerning the different aspects of bullying at all stages in childhood, teenage years and adulthood." dateAndTime="20/6/2024" id='2' />
                <NewsCard eventTitle='Chouaa Al Amal' eventContent="Zahle hosts a self-care and well being session with their dedicated teachers and monitors" dateAndTime="20/7/2024" id='2' />
            </div>
        </>
    )
}
