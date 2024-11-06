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
import Medico1 from './Pages/Medico1.jsx'
import Medico2 from './Pages/Medico2.jsx'
import Medico3 from './Pages/Medico3.jsx'
import Medico4 from './Pages/Medico4.jsx'
import Nutricao from './Pages/Nutricao.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Cadastrar', element: <Cadastrar /> },
      { path: 'Recuperarsenha', element: <RecuperarSenha/> },
      { path: 'Home', element: <Home/> },   
      { path: 'Login', element: <Login/> },   
      { path: '/Home/MarketPlace', element: <MarketPlace/> },    
      { path: 'Consultas', element: <Consultas/>}, 
      { path: 'Sobre', element: <Sobre/>}, 
      { path: '/Home/Confirmacao', element: <Confirmacao/>},   
      { path: 'ChatBox', element: <ChatBox/>},  
      { path: 'Terapia', element: <Terapia/>}, 
      { path: 'Medico1', element: <Medico1/>}, 
      {path: 'Medico2', element: <Medico2/>},
      {path: 'Medico3', element: <Medico3/>},
      {path: 'Medico4', element: <Medico4/>},
      {path: 'Nutricao', element: <Nutricao/>},
      { path: '*', element: <PageNotFound /> }
    ],  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)