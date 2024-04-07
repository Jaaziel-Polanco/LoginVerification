import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Login from './Components/registro/Login'
import Registro from './Components/registro/Registro'
import Error from './Components/Home/Error'
import Recovery from './Components/registro/Recovery'


const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/SignUp',
    element: <Registro />,
  },
  {
    path: '/Reset',
    element: <Recovery />,
  },


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
