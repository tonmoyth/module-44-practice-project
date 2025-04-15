import React from 'react';
import { useLoaderData } from 'react-router';

const AboutCardDetails = () => {
    const aboutData = useLoaderData();
    
    
    return (
        <div>
            <h1>{aboutData.title}</h1>
        </div>
    );
};

export default AboutCardDetails;