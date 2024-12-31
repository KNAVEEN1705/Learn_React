// index.js
import React,{lazy,Suspense}from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './src/Header'; // Import the Header component
import Body from './src/Body.js';
import Aboutus from './src/Aboutus';
import Contactus from './src/Contactus';

import Error from './src/Error'; // Import Error Component

import { Provider } from 'react-redux';


import './index.css';
import RestaurantMenu from './src/RestaurantMenu.js';
import appStore from './src/utills/appStore.js';
import Cart from './src/Cart.js';

const Grocery=lazy(()=>import("./src/Grocery.js"))
const App = () => {
    return (
        <Provider store={appStore}>
            <Header />
            <Outlet /> {/* This is where child routes will be rendered */}
        </Provider>
    );
};

// Create the router with the routes you need
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body /> // Default Body component for the home route
            },
            {
                path: 'about',
                element: <Aboutus />
            },
            {
                path: 'contact',
                element: <Contactus />
            },
            {
                path:"cart",
                element:<Cart/>
            },
           
            {
                path:'grocery',
                element:<Suspense fallback={<h1>Loding..........</h1>}><Grocery/></Suspense>
            },
            {
                path:"restaurant/:resID",
                element:<RestaurantMenu/>
            }
           
        ],
        errorElement: <Error /> // Show Error component for unhandled routes
    },
]);

// Render the RouterProvider to enable routing
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
