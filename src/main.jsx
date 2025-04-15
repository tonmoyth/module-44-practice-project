import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'

import Blog from './component/Blog/Blog.jsx'
import Contact from './component/Contact/Contact.jsx'
import ServicesCard from './component/Services/ServicesCard.jsx'
import Services from './component/Services/Services.jsx'
import AboutCardDetails from './component/About/AboutCardDetails.jsx'
import ServiceDetails from './component/Services/serviceDetails.jsx'




const servicesPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/about",
        loader: () => fetch('About.json'),
        Component: About
      },
      {
        path: "/about/:aboutId",
        loader: async ({params}) => {
          const res = await fetch('/About.json');
          const data = await res.json();
          const matchData = data.find(item => item.id.toString() === params.aboutId);
          
          return matchData;
        },
        Component: AboutCardDetails
      },
      {
        path: "/services",
        element: <Suspense fallback={<h1>Loading</h1>}> 
          <Services servicesPromise={servicesPromise}></Services>
        </Suspense>
        
      },
      {
        path: "/services/:servicesId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.servicesId}`),
        Component: ServiceDetails
      },
      {
        path: "/blog",
        Component: Blog
      },
      {
        path: "/contact",
        Component: Contact
      },
      {
        path: "*",
        element: <h1>Not Found</h1>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
