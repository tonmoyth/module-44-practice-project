import React, { use } from 'react';

const ShowMassage = ({promis}) => {
    
    const data = use(promis);
    
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default ShowMassage;