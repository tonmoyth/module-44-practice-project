import { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import ShowMassage from "./showMassage";

const ServicesCard = ({services}) => {
    const {id,name,email,username} = services;
    
    const [show,setShow] = useState(false);

    const promis = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    const [visitHome,setVisitHome] = useState(false);

    if(visitHome){
       return <Navigate to={'/'}></Navigate>
    }
    return (
        <div className="border p-4 m-4">
            <span>{username}</span>
            <h1>{name}</h1>
            <span>{email}</span>
            <br />
            <Link to={`/services/${id}`}>
            <button className="btn">Details</button>
            </Link>
            <button className="btn" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
            {show && <Suspense fallback={<span>Loading...</span>}>
            <ShowMassage promis={promis}></ShowMassage>
            </Suspense> }

            <button onClick={() => setVisitHome(true)}>visit Home</button>
        </div>
    );
};

export default ServicesCard;