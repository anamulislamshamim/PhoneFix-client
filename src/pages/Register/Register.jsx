import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import useToken from '../../hooks/useToken';

export const Register = () => {
    const token = useToken();
    const [accept, setAccept] = useState(false);
    const { registerWithEmailAndPassword, signInWithGoogle } = useContext(authContext);
    const navigate = useNavigate();
    const submitHandeler = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const profilePicture = form.profilePicture.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName, profilePicture, email, password);
        registerWithEmailAndPassword(email, password)
            .then(result => {
                if (result) {
                    const user = result.user;
                    user.displayName = fullName;
                    user.photoURL = profilePicture;
                    token({email:email});
                    toast.success("Registered successfully!");
                    form.reset();
                    navigate("/");
                };
                console.log(result.user);
            }).catch(() => {
                toast.warning("Something went wrong! Please try again!");
            });
    };
    const googleSignInHandeler = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                // jwt
                token({email:user.email});
                toast.success("Login successfull!");
                
                navigate("/");
            }).catch(() => {
                toast.error("Invalid email!");
            })
    };
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row-reverse">
                <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=826&t=st=1667980906~exp=1667981506~hmac=f3613273bd796d7c8b4f994b811c5e44990b07aa0f7a98a52f43fdb53e144e79" alt="" />
                    </div>
                </div>
                <div className="flex items-center justify-center lg:w-1/2">
                    <div className="w-4/5">
                        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                            <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                Please Sign-up
                            </h3>
                            <form onSubmit={submitHandeler}>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="fullName"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Full name
                                    </label>
                                    <input
                                        placeholder="John"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="fullName"
                                        name="fullName"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="text"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Your profile picture url
                                    </label>
                                    <input
                                        placeholder="http://profilepic.png"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="profilePicture"
                                        name="profilePicture"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="email"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        placeholder="john.doe@example.org"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="password"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Password
                                    </label>
                                    <input
                                        placeholder="[0-9][&^%*()@!~][a-z][A-Z]"
                                        required
                                        type="password"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="password"
                                        name="password"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <input
                                        className='mr-2'
                                        onClick={() => setAccept(!accept)}
                                        type="checkbox"
                                        id="checkbox"
                                        name="checkbox"
                                    />
                                    <label
                                        htmlFor="checkbox"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Accept our <Link to='/terms&conditions' className='text-green-600 link'>terms & conditions</Link>
                                    </label>
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 focus:shadow-outline focus:outline-none"
                                        disabled={!accept}
                                    >
                                        Sign up
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    onClick={googleSignInHandeler}
                                    className="inline-flex items-center cursor-pointer justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 focus:shadow-outline focus:outline-none"
                                >
                                    <span className='mr-2'><FaGoogle /></span> Google
                                </button>
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">
                                Already have account? <Link to='/login' className='text-green-600 link'>login please</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;