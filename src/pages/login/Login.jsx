import {
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container mx-auto px-8 flex justify-center py-28">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your credentials to log in.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
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
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <div>
                        <input type="submit" value="sign up" className="mt-6 bg-primaryColor text-white py-2 px-4 cursor-pointer w-full rounded" />
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Not have an account?{" "}
                        <Link to={'/register'} className="font-medium text-gray-900">
                            Sign Up
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Login;