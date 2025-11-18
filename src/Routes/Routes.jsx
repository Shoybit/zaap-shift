import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Cover from "../Pages/Covargespages/Cover";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

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
            path: 'cover',
            element: <Cover></Cover>,
            loader: () => fetch('/warehouses.json').then(res => res.json())
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