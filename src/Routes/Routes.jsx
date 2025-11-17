import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Cover from "../Pages/Covargespages/Cover";

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
]);