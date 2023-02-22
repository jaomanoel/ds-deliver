import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Product from "./pages/Product";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/orders',
        element: <Order />
    },
    {
        path: '/products',
        element: <Product /> 
    }
]);