import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Cadastrar from './Pages/Cadastrar.jsx'
import PageNotFound from './Pages/PageNotFound.jsx'
import RecuperarSenha from './Pages/RecuperarSenha.jsx'
import Home from './Pages/Home.jsx'
import Filtragem from './Pages/Filtragem.jsx'




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: 'Cadastrar', element: <Cadastrar /> },
      { path: 'Recuperarsenha', element: <RecuperarSenha/> },
      { path: 'Home', element: <Home/> },
      { path : 'Filtragem', element: <Filtragem/> },
      { path: '*', element: <PageNotFound /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)