import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainImage from './components/MainImage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "game",
    element: <MainImage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>,
)
