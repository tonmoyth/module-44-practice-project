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




const servicesPromise = fetch('Services.json')
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
        path: "/services",
        element: <Suspense fallback={<h1>Loading</h1>}> 
          <Services servicesPromise={servicesPromise}></Services>
        </Suspense>
        
      },
      {
        path: "/blog",
        Component: Blog
      },
      {
        path: "/contact",
        Component: Contact
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
