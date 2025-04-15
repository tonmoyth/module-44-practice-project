import { NavLink } from "react-router";
import './navber.css'
const Navber = ({nav}) => {

    

    return (
        <ul className="py-5">
            <NavLink to={nav.link}>
                {({isPending})=>(
                    <span>{nav.name}{isPending && <span>Loading...</span>}</span>
                )}
                
                </NavLink>
        </ul>
    );
};

export default Navber;