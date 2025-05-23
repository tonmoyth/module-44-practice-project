import { useState } from 'react';
import './App.css'
import Navber from './component/navber/Navber'
import Hamburger from 'hamburger-react';
import Hero from './component/hero/Hero';
import { Outlet, useNavigation } from 'react-router';



const navbarItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" }
];

function App() {
  
  const [open,setOpen] = useState(false);
  
  const navLink = navbarItems.map(nav => <Navber nav={nav} key={nav.id}></Navber>);

  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);


  return (
    <>
    <nav className='bg-blue-950 text-white py-2'>
      <div className='w-11/12 mx-auto flex justify-between items-center'>
      <span className='flex gap-4 items-center'>
      <button className='md:hidden' onClick={() => setOpen(!open)}>
        {open ? <Hamburger></Hamburger> : <Hamburger></Hamburger>}
      </button>
      

      <h1 className='text-2xl'>Bangladesh</h1>
      </span>
      
      <ul className='md:flex hidden gap-6'>
        {
          navLink
        }
      </ul>
      <button className='btn'>Button</button>
      </div>
    </nav>

    <div className='flex'>
    <ul className='bg-amber-700 px-40 h-screen'>
        {
          navLink
        }
      </ul>

      {isNavigating && <span>Loading..</span>}
      <Outlet></Outlet>
    </div>
    
      
      
    </>
  )
}

export default App
