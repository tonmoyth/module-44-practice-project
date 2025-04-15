import React from 'react';
import { Link } from 'react-router';

const AboutCard = ({about}) => {
    const {id,title,description} = about;
    return (
        <div className='border p-4 m-4'>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to={`/about/${id}`}>
            <button className='btn bg-blue-800'>Details</button>
            </Link>
        </div>
    );
};

export default AboutCard;