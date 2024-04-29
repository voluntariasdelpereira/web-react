import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import NavigationBar from "./components/Navigation.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Objetivo} from "./components/Objetivo.jsx";
import {Voluntarias} from "./components/Voluntarias.jsx";
import {Talleres} from "./components/Talleres.jsx";
import {Eventos} from "./components/Eventos.jsx";
import {MyFotos} from "./components/MyFotos.jsx";
import {GrupoVoluntarias} from "./components/GrupoVoluntarias.jsx";
import {Colaboraciones} from "./components/Colaboraciones.jsx";
import {Footer} from "./components/Footer.jsx";

const router = createBrowserRouter([
    {
        path: "/",  element: <Home/>,
    },
    {
        path: "/objetivo",  element: <Objetivo/>,
    },

    {
        path: "/voluntarias",  element: <Voluntarias/>,
    },
    {
        path: "/grupo_voluntarias",  element: <GrupoVoluntarias/>,
    },
    {
        path: "/talleres",  element: <Talleres/>,
    },
    {
        path: "/eventos",  element: <Eventos/>,
    },
    {
        path: "/fotos",  element: <MyFotos/>,
    },
    {
        path: "/colaboraciones",  element: <Colaboraciones/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <NavigationBar/>
        <RouterProvider router={router} />
        <Footer/>

    </React.StrictMode>,
)
