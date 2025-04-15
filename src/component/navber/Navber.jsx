import { NavLink } from "react-router";
import './navber.css'
const Navber = ({nav}) => {

    

    return (
        <ul className="py-5">
            <NavLink to={nav.link}>{nav.name}</NavLink>
        </ul>
    );
};

export default Navber;