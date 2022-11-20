import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Homepage from "../src/componets/Homepage.jsx";
import Home from "../componets/Home.jsx";
import Tecnologias from '../componets/Tecnologias.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tecnologias",
        element: <Tecnologias />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
