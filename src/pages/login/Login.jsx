import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allContext } from "../../allContext/AllContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const gooleProvider = new GoogleAuthProvider();

const Login = () => {
    const { userSignIn, userSignInWithPopup } = useContext(allContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        userSignIn(email, password)
            .then(() => {
                navigate('/');
                toast.success(" Successfully Log In ", { position: toast.POSITION.TOP_CENTER });
            })
            .catch((errData) => {
                let err = errData.message
                err = 'password or email doesn\'t match'
                return toast.warn(`${err}`, { position: toast.POSITION.TOP_CENTER });
            });
    }

    const handleUserSignInWithPopup = () => {
        userSignInWithPopup(gooleProvider)
            .then(() => {
                navigate('/');
                toast.success(" Successfully Log In ", { position: toast.POSITION.TOP_CENTER });
            }).catch((error) => {
                const errorMessage = error.message;
                console.log('popUpSignInError', errorMessage);
            });
    }

    return (
        <div className="container mx-auto px-8 flex justify-center py-28">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your credentials to log in.
                </Typography>
                <form onSubmit={handleLogin} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            name="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            name="password"
                            type="text"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div>
                        <input type="submit" value="sign In" className="mt-6 bg-primaryColor text-white py-2 px-4 cursor-pointer w-full rounded" />
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Not have an account?{" "}
                        <Link to={'/register'} className="font-medium text-gray-900">
                            Sign Up
                        </Link>
                    </Typography>
                </form>
                <div className="flex justify-center items-center">
                    <div className='mt-2 my-4 mx-1'>
                        <button onClick={handleUserSignInWithPopup} className='text-primaryColor flex items-center gap-2 py-2 border-2 border-primaryColor rounded-lg text-sm font-medium my-3 px-4 min-w-[185px] hover:bg-primaryColor hover:text-white'><span> <FaGoogle /> </span> <span>Login with Google</span> </button>
                        {/* <button className='text-[#403F3F] flex items-center gap-2 py-2 justify-center border-2 border-[#403F3F] rounded-lg text-sm font-medium my-3 px-4 min-w-[185px]'><span> <FaGithub /> </span> <span>Login with Github</span> </button> */}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Login;