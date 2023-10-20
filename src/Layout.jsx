
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useLocalStorage from 'use-local-storage';

const Layout = () => {

    const defaultDark = window.matchMedia(('prefers-color-scheme:dark')).matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <>
            <div data-theme={theme}>
                <div className="app">
                    <Header switchTheme={switchTheme} theme={theme}></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
                    < ToastContainer></ToastContainer>

                </div>
            </div>
        </>
    );
};

export default Layout;

