
import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";
import AddProduct from "./pages/addProduct/AddProduct";
import BrandProducts from "./pages/brandProducts/BrandProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/brands')
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/brand/:brandName',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.brandName}`)
            }
        ]
    },
]);

export default router;

