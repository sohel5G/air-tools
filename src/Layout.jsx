
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            < ToastContainer></ToastContainer>
        </>
    );
};

export default Layout;

