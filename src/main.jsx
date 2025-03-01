import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import Contact from './Components/Contact.jsx';
import Experience from './Components/Experience.jsx';
import Projects from './Components/Projects.jsx';

const appRouter = createBrowserRouter([
  { path: '/',
    element: (
        <App />
      ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/",
        element: <App />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/experience",
            element: <Experience />
          },
          {
            path: "/projects",
            element: <Projects />
          },
          {
            path: "/contact",
            element: <Contact />
          }
        ]
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
