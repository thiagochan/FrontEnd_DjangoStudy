import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PeoplePage from './pages/PeoplePage.jsx';
import PlacesPage from './pages/PlacesPage.jsx';
import PageSidebar from './components/PageSidebar.jsx';
import ReportPage from './pages/ReportPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageSidebar/>,
    children: [
      {
        index: true,
        element: <PeoplePage/>
      },
      {
        path: "/places",
        element: <PlacesPage/>
      },
      {
        path: "/report",
        element: <ReportPage/>
      }
    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
