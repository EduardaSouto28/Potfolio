import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Homepage from "./componets/Homepage";
import Home from "./componets/Home";
import Tecnologias from './componets/Tecnologias';


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
      // {
      //   path: "portfolio",
      //   element: <Portfólio />,
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
