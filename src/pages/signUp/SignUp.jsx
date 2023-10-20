/* eslint-disable no-useless-escape */
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allContext } from "../../allContext/AllContext";
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    const { userSignUp, userUpdateOnSignUp, setUser } = useContext(allContext);

    const handleUserSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const phUrl = event.target.phUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        if (password.length < 6) {
            return toast.warn(" Password must be 6 characters or more! ", { position: toast.POSITION.TOP_CENTER });
        } else if (!/[A-Z]/.test(password)) {
            return toast.warn(" Password must be at least one capital letter! ", { position: toast.POSITION.TOP_CENTER });
        } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)) {
            return toast.warn(" Password must be at least one special character! ", { position: toast.POSITION.TOP_CENTER });
        } else if (!terms === true) {
            return toast.warn(" Please accept the term & conditions ", { position: toast.POSITION.TOP_CENTER });
        }

        userSignUp(email, password)
            .then(() => {

                userUpdateOnSignUp({ displayName: name, photoURL: phUrl })
                    .then(() => {
                        console.log('profile data set')
                        setUser({ displayName: name, photoURL: phUrl, email: email })

                    }).catch((error) => {
                        console.log('profile data not set', error)
                    });
                toast.success(" Successfully registered ", { position: toast.POSITION.TOP_CENTER });
                navigate('/');
            })
            .catch((errData) => {
                let err = errData.message;
                err = 'Email address already exist';
                return toast.warn(`${err}`, { position: toast.POSITION.TOP_CENTER });
            });
    }


    return (
        <div className="container mx-auto px-8 flex justify-center py-28">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleUserSignUp} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            required
                            type="text"
                            name="name"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Image URL
                        </Typography>
                        <Input
                            required
                            type="url"
                            name="phUrl"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            required
                            type="email"
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
                    <Checkbox
                        name="terms"
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a href="#" className="font-medium transition-colors hover:text-gray-900">
                                    Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <div>
                        <input type="submit" value="sign up" className="mt-6 bg-primaryColor !text-white py-2 px-4 cursor-pointer w-full rounded" />
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to={'/login'} className="font-medium text-gray-900">
                            Sign In
                        </Link>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;