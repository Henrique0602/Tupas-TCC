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
import MarketPlace from './Pages/MarketPlace.jsx'
import Confirmacao from './Pages/confirmacao.jsx'
import ChatBox from './Pages/ChatBox.jsx'
import Consultas from './Pages/Consultas.jsx'
import Sobre from './Pages/Sobre.jsx'
import Terapia from './Pages/Terapia.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: 'Cadastrar', element: <Cadastrar /> },
      { path: 'Recuperarsenha', element: <RecuperarSenha/> },
      { path: 'Home', element: <Home/> },     
      { path: '/Home/MarketPlace', element: <MarketPlace/> },    
      { path: 'Consultas', element: <Consultas/>}, 
      { path: 'Sobre', element: <Sobre/>}, 
      { path: '/Home/Confirmacao', element: <Confirmacao/>},   
      { path: 'ChatBox', element: <ChatBox/>},  
      { path: 'Terapia', element: <Terapia/>}, 
      { path: '*', element: <PageNotFound /> }
    ],  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)