import React from 'react';

const AboutCard = ({about}) => {
    const {title,description} = about;
    return (
        <div className='border p-4 m-4'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default AboutCard;