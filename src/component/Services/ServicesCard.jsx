
const ServicesCard = ({services}) => {
    const {icon,title,price} = services;
    
    
    return (
        <div className="border p-4 m-4">
            <span>{icon}</span>
            <h1>{title}</h1>
            <span>{price}</span>
        </div>
    );
};

export default ServicesCard;