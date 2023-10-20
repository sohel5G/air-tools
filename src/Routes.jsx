
import { createBrowserRouter } from "react-router-dom";
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
import ContactPage from "./contactPage/ContactPage";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import PrivateRouteLogin from "./privateRoutes/PrivateRouteLogin";

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
                element: <PrivateRoute> <AddProduct></AddProduct> </PrivateRoute>
            },
            {
                path: '/brand/:brandName',
                element: <BrandProducts></BrandProducts>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.brandName}`)
            },
            {
                path: '/product/update/:id',
                element: <PrivateRoute> <ProductUpdate></ProductUpdate> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/product/:id',
                element: <PrivateRoute> <SingleProduct></SingleProduct> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/cart',
                element: <PrivateRoute> <CartPage></CartPage> </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/carditems')
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/register',
                element: <PrivateRouteLogin> <SignUp></SignUp> </PrivateRouteLogin>
            },
            {
                path: '/login',
                element: <PrivateRouteLogin> <Login></Login> </PrivateRouteLogin>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            }
        ]
    },
]);

export default router;

