import React from "react";
import { Navbar, Collapse, Button, IconButton, List, ListItem } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/img/logo.png"

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <NavLink
                to={'/'}
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"

            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-primaryColor hover:text-white hover:bg-opacity-100 focus:bg-opacity-0 focus:text-white rounded-md">
                    Home
                </ListItem>
            </NavLink>
            <NavLink
                to={'/addproduct'}
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"

            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-primaryColor hover:text-white hover:bg-opacity-100 focus:bg-opacity-0 focus:text-white rounded-md">
                    Add Product
                </ListItem>
            </NavLink>
            <NavLink
                to={'/products'}
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"

            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-primaryColor hover:text-white hover:bg-opacity-100 focus:bg-opacity-0 focus:text-white rounded-md">
                    All Products
                </ListItem>
            </NavLink>
            <NavLink
                to={'/contact'}
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-primaryColor hover:text-white  hover:bg-opacity-100 focus:bg-opacity-0 focus:text-white rounded-md">
                    Contact Us
                </ListItem>
            </NavLink>
        </List>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    // const user = null
    const user = { displayName: 'Sohel Rana', photoURL: "https://i.ibb.co/CmTmXzS/weeding.png" }

    return (
        <>
            <header>
                <Navbar className="max-w-full px-8 py-3">
                    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                        <Link
                            to={'/'}
                            as="a"
                            href="#"
                            variant="h6"
                            className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                        >
                            <img className="w-56" src={logo} alt="Main Logo" />
                        </Link>
                        <div className="hidden lg:block">
                            <NavList />
                        </div>
                        <div className="hidden gap-2 lg:flex lg:items-center">
                            <Link to={'/cart'}>
                                <Button variant="text" size="sm" className="bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md">
                                    Cart Items
                                </Button>
                            </Link>
                            {
                                !user ? 
                                <>
                                    <Link to={'/login'}>
                                        <Button variant="text" size="sm" className="bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md">
                                            Log In
                                        </Button>
                                    </Link>
                                    <Link to={'/register'}>
                                        <Button variant="text" size="sm" className="bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md">
                                            Register
                                        </Button>
                                    </Link>
                                </> :
                                <>
                                    <div className="flex gap-2 items-center">
                                        <img src={user?.photoURL} alt="" className="w-10 h-10 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                        <div>
                                            <h2 className="text-black font-semibold text-sm leading-none"> {user?.displayName} </h2>
                                            <button className="-mt-7 font-semibold pb-[2px] px-[2px] text-sm text-primaryColor border-b border-primaryColor">Log Out</button>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <IconButton
                            variant="text"
                            className="lg:hidden bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md"
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                            ) : (
                                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                            )}
                        </IconButton>
                    </div>
                    <Collapse open={openNav}>
                        <NavList />
                        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                            <Link to={'/cart'}>
                                <Button variant="text" size="sm" className="bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md" fullWidth>
                                    Cart Items
                                </Button>
                            </Link>
                            {
                                !user ?
                                    <>
                                        <Link to={'/login'}>
                                            <Button variant="text" size="sm" className="bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md" fullWidth>
                                                Log In
                                            </Button>
                                        </Link>
                                        <Link to={'/register'}>
                                            <Button variant="text" size="sm" className="bg-primaryColor text-white hover:text-white hover:bg-primaryColor rounded-md" fullWidth>
                                                Register
                                            </Button>
                                        </Link>
                                    </> :
                                    <>
                                        <div className="flex gap-2 items-center">
                                            <img src={user?.photoURL} alt="" className="w-10 h-10 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                            <div>
                                                <h2 className="text-black font-semibold text-sm leading-none"> {user?.displayName} </h2>
                                                <button className="-mt-7 font-semibold pb-[2px] px-[2px] text-sm text-primaryColor border-b border-primaryColor">Log Out</button>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </Collapse>
                </Navbar>
            </header>
        </>
    );
};

export default Header;

