import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';
import { FaGoogle } from 'react-icons/fa';
import useToken from '../../hooks/useToken';

export const Login = () => {
    const { loginWithEmailAndPassword, signInWithGoogle } = useContext(authContext);
    const token = useToken();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const submitHandeler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        loginWithEmailAndPassword(email, password)
        .then(() => {
            toast.success("Login successfull!");
            form.reset();
            const currentUser = { email: email };
            token(currentUser);
            navigate(from, { replace: true });
        })
        .catch(() => {
            toast.error("Invalid email or password");
        });
    };
    const googleSignInHandeler = () => {
      signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Login successfull!");
        // jwt token
        token({email:user.email});
        navigate(from, { replace: true })
      }).catch(() => {
        toast.error("Invalid email!");
      })
    };
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <img src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7962.jpg?w=826&t=st=1667980749~exp=1667981349~hmac=3a4d589958c6753d4cf5111ddb2fd1c7c021f85f3c4aa2e0c60501711afe2de6" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
          <div className="w-4/5">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Please Login
                </h3>
                <form onSubmit={ submitHandeler }>
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
                  <p><Link to="/forgotten" className='text-green-800 link'>Forgotten password</Link></p>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-200 hover:bg-green-600 focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    onClick={googleSignInHandeler}
                                    className="inline-flex items-center cursor-pointer justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 focus:shadow-outline focus:outline-none"
                                >
                                    <span className='mr-2'><FaGoogle /></span> Google
                                </button>
                            </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Have not create account? <Link to='/register' className='text-green-600 link'>Register please</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Login;