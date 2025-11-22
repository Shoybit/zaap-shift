import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Cover from "../Pages/Covargespages/Cover";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children : [
        {
            index: true,
            Component: Home
        },
        {
            path: '/rider',
            element: <PrivateRoute>
                <Rider></Rider>
            </PrivateRoute>
            
        },
        {
            path: 'cover',
            element: <Cover></Cover>,
            loader: () => fetch('/warehouses.json').then(res => res.json())
        },
        {
            path: 'about',
            Component: About
        }
        
    ]
},

{
    path: '/',
    Component: AuthLayout,
    children: [
        {
            path: 'login',
            Component: Login
        },
        {
            path: 'register',
            Component: Register
        }
    ]
}
]);