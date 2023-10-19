
import {createBrowserRouter} from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";
import AddProduct from "./pages/addProduct/AddProduct";
import BrandProducts from "./pages/brandProducts/BrandProducts";
import SingleProduct from "./pages/products/SingleProduct";
import ProductUpdate from "./pages/productUpdate/ProductUpdate";
import CartPage from "./pages/cart/CartPage";
import Products from "./pages/products/Products";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";

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
            },
            {
                path: '/product/update/:id',
                element: <ProductUpdate></ProductUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/product/:id',
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/cart',
                element: <CartPage></CartPage>,
                loader: () => fetch('http://localhost:5000/carditems')
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;

