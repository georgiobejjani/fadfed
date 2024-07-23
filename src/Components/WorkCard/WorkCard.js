import React from 'react'
import Accordion from '../Accordion/Accordion'
import './WorkCard.css';
export default function WorkCard({ smallTitle, title, style }) {
    return (
        <div className='workCard'>
            <h1 className='workCard__title'>Our Work</h1>
            <div className='workCard__inside'>
                <Accordion style={'white'} title="Free Psychological Sessions">
                    <ul>
                        <li>Trained and licensed mental health professionals will offer free one-on-one psychological sessions to individuals in need.</li>
                        <li>Sessions will provide a safe and confidential space for individuals to discuss their concerns, receive counseling, and develop coping strategies.</li>
                        <li>A wide range of mental health issues will be addressed, including anxiety, depression, stress, trauma, and more.</li>
                    </ul>
                </Accordion>
                <Accordion style={'white'} title="Suicide Hotline">
                    <ul>
                        <li>A 24/7 suicide hotline will be established, staffed by empathetic and trained volunteers who can provide immediate support to individuals in crisis.</li>
                        <li>Callers will have access to confidential and non-judgmental conversations, risk assessment, and guidance on seeking professional help.</li>
                        <li>The hotline will serve as a lifeline for those struggling with thoughts of suicide, helping them find hope and resources.</li>
                    </ul>
                </Accordion>
                <Accordion style={'white'} title=" ⁠Awareness Sessions (schools, universities, social groups, organizations…)">
                    <ul>
                        <li>Collaborations with educational institutions, social groups and different organizations will facilitate awareness sessions on mental health, targeting students, educators, parents and the common social man.</li>
                        <li>These sessions will aim to reduce stigma, increase understanding of mental health issues, and provide practical tools for managing stress and emotional well-being.</li>
                        <li>Interactive workshops, seminars, and presentations will empower participants to recognize signs of mental distress in themselves and others.</li>
                    </ul>
                </Accordion>
                <Accordion style={'white'} title="Stigma Reduction">
                    <ul>
                        <li>Launch campaigns to challenge social stigmas and stereotypes associated with mental health</li>
                        <li>Collaborate with media outlets to promote accurate portrayals of mental health issues.</li>
                        <li>Engage with community leaders, influencers, and organizations to foster supportive environments and reduce discrimination.</li>
                    </ul>
                </Accordion>
                <Accordion style={'white'} title="⁠Partnerships and Advocacy">
                    <ul>
                        <li>Collaborate with local government bodies, healthcare providers, and other NGOs to advocate for policies that prioritize mental health.</li>
                        <li>Engage in research initiatives to generate evidence-based practices and contribute to the development of mental health policies.</li>
                        <li>Form partnerships with academic institutions, fostering research, and capacity building in the field of mental health.</li>
                    </ul>
                </Accordion>
                <Accordion style={'white'} title="⁠⁠Implementation Plan">
                    <ul>
                        <li>Conduct a comprehensive needs assessment to identify mental health gaps in the target community.</li>
                        <li>Develop partnerships with relevant stakeholders, including government agencies, healthcare providers, and community organizations.</li>
                        <li>Secure funding through grants, corporate sponsorships, and individual donations to support program implementation and sustainability.</li>
                        <li>⁠Recruit and train a team of qualified mental health professionals, ensuring culturally sensitive and inclusive practices.</li>
                        <li>Implement awareness campaigns, educational initiatives, and counseling services based on identified needs and available resources.</li>
                        <li>Monitor and evaluate the effectiveness of programs and services, making necessary adjustments for continuous improvement through Release’s M&E program.</li>
                    </ul>
                </Accordion>
            </div>
        </div>
    )
}
