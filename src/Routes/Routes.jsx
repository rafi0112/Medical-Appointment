import React, { Children } from "react";
import {
    createBrowserRouter,
} from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import MyAppointment from "../pages/MyAppointment/MyAppointment";
import Blogs from "../pages/Blogs/Blogs";

export const router = createBrowserRouter([
    {
    path: "/",
    Component: Root,
    loader: () => fetch("data.json"),
    errorElement: <Error />,
    children: [
        {
            index: true,
            path: "/",
            loader : ()=> fetch("data.json"),
            Component : Home,
            errorElement: <Error />
        },
        {
            path: "/doctor/:id",
            loader: () => fetch(`data.json`),
            Component: DoctorDetails
        },
        {
            path: "/bookings",
            loader: () => fetch(`data.json`),
            Component: MyAppointment
        },
        {
            path: "/blogs",
            Component: Blogs
        },
        {
            path: "*",
            element: <Error />
        }
    ]
    },
    
]);