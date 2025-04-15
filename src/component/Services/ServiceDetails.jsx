import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const data = useLoaderData();
    const {name} = data;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default ServiceDetails;