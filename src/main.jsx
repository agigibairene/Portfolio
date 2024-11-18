import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';

const appRouter = createBrowserRouter([
  { path: '/',
    element: <App />,
    children: [
      { path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
