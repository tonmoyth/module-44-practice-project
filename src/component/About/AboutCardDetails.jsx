import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const AboutCardDetails = () => {
    const aboutData = useLoaderData();
    
    const navigated = useNavigate();
    const transfar = () => {
        navigated(-1);
    }
    return (
        <div>
            <h1>{aboutData.title}</h1>
            <button onClick={transfar} className='btn'>Go back</button>

            <button className='btn' onClick={() => navigated('/')}>Go Home</button>
        </div>
    );
};

export default AboutCardDetails;