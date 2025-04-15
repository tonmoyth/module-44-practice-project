import { Link } from "react-router";

const ServicesCard = ({services}) => {
    const {id,name,email,username} = services;
    
    
    return (
        <div className="border p-4 m-4">
            <span>{username}</span>
            <h1>{name}</h1>
            <span>{email}</span>
            <br />
            <Link to={`/services/${id}`}>
            <button className="btn">Details</button>
            </Link>
        </div>
    );
};

export default ServicesCard;