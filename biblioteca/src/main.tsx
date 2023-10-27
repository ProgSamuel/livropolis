import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import { App } from "./routes/root";
import Update from './routes/update'
import ErrorPage from "./error-page";

import './index.css'

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  },
  {
    path: "/update",
    element:<Update />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
