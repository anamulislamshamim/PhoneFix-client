import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';

export const AddReview = () => {
    const service = useLoaderData();
    const { user } = useContext(authContext);
    const submitHandeler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const review = form.review.value;
        const userReview = {
          date:new Date().toLocaleDateString(),
          productId:service._id,
          productName:service.name,
          email:email,
          review:review,
          name:user.displayName,
          image:user.photoURL
        };
        console.log(userReview);
        fetch(`http://localhost:4000/review`, {
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(userReview)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          form.reset();
        }).catch(err => {
          toast.error("Something went wrong!");
        });
    };
    return (
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://img.freepik.com/free-vector/client-review-web-screen-successful-5-star-business-opinion_1150-37481.jpg?w=1380&t=st=1667940232~exp=1667940832~hmac=831fe364871373168e22609b255f1be7e2d1b0c452fb3696322dbf99de41c69a"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
                  Please give your honest review
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                I will bring your honest
                <br className="hidden md:block" />
                review in my real<br /> {' '}
                <span className="inline-block text-deep-purple-accent-400">
                  work.
                </span>
              </h2>
            </div>
            <form onSubmit={ submitHandeler } className="w-4/5">
              <div className="">
                <input
                  placeholder="Email"
                  defaultValue={user.email}
                  type="email"
                  name='email'
                  disabled
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                />
                <p className='my-3'>
                <textarea name='review' className="textarea textarea-bordered w-full" placeholder="write your review..." required></textarea>
                </p>
              </div>
              <div className="flex items-center mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 focus:shadow-outline focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default AddReview;