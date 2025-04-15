import React from 'react';
import { useLoaderData } from 'react-router';
import AboutCard from './AboutCard/AboutCard';

const About = () => {
    const aboutData = useLoaderData();
   
    return (
        <div className='grid grid-cols-2'>
            {
                aboutData.map(about => <AboutCard key={about.id} about={about}></AboutCard>)
            }
        </div>
    );
};

export default About;