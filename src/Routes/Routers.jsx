import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import LogIn from "../Navbar/LogIn";
import Resister from "../Navbar/Register";
import Home from "../Home/Home";
import Error from "../Error/Error";
import ContactUs from "../Pages/ContactUs";
import About from "../Pages/About";
import AddBlood from "../Pages/AddBlood";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            Component: Home
        },
        {
            path:'/login',
            Component:LogIn
        },
        {
            path: '/register',
            Component: Resister
        },
       {
        path: '/contact',
        Component: ContactUs
       },
       {
        path: '/about',
        Component: About
       },
       {
        path: '/addBlood',
        Component: AddBlood
       }
    ],
  },
]);
