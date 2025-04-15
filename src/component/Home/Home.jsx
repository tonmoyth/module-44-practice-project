import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {

    const navigated = useNavigate();
    
    return (
        <div>
            <h1>This is Home page</h1>
            <button onClick={() => navigated('/contact')} className='btn'>Go contact</button>
        </div>
    );
};

export default Home;