import { createBrowserRouter } from "react-router-dom";
import Home from "../component/home/index";
import Login from "../component/login";
import Register from "../component/register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])