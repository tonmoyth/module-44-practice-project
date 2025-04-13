
const Navber = ({nav}) => {

    

    return (
        <ul>
            <li className="hover:bg-amber-300 p-4"><a  href={nav.link}>{nav.name}</a></li>
        </ul>
    );
};

export default Navber;