import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Services from './component/Services/Services.jsx'
import Blog from './component/Blog/Blog.jsx'
import Contact from './component/Contact/Contact.jsx'

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
        Component: About
      },
      {
        path: "/services",
        Component: Services
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
