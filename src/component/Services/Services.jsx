import React, { use } from 'react';
import ServicesCard from './ServicesCard';

const Services = ({servicesPromise}) => {

    const servicesData = use(servicesPromise);
    
    return (
        <div className='grid grid-cols-3'>
            {
               servicesData.map(services => <ServicesCard 
                services={services}
                key={services.id}
                ></ServicesCard>) 
            }
        </div>
    );
};

export default Services;