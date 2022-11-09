import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UpdateReview = () => {
    const navigate = useNavigate();
    const review = useLoaderData();
    const updateHandeler = (event) => {
        event.preventDefault();
        const updateMessage = event.target.message.value;
        fetch(`http://localhost:4000/review/update`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id:review._id, review:updateMessage})
        })
        .then(res => res.json())
        .then(updateData => {
            if(updateData.modifiedCount > 0){
                navigate("/my-reviews");
                toast.success("updated successfully!");
            };
        }).catch(() => {
            toast.error("something went wrong!");
        })
    }
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row lg:flex-row-reverse">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-green-400 text-white rounded-full">Review Update</p>
              </div>
              <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                Your honest review 
                <br className="hidden md:block" />
                help us to{' '}<br/>
                <span className="inline-block text-deep-purple-accent-400">improve</span>
              </h2>
            </div>
            <form onSubmit={updateHandeler}>
              <textarea name="message" id="" cols="30" rows="10" defaultValue={ review.review } className='p-2 w-full' autoFocus={true}>
            
              </textarea>
              <button type='submit' className="btn btn-info rounded text-white w-full">update</button>
            </form>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <img src="https://img.freepik.com/free-vector/reviews-concept-landing-page_52683-18630.jpg?w=1380&t=st=1668015487~exp=1668016087~hmac=a82729cad72f9924650a7791f13a6ba31e44be1d9ea7fcb1d94df173106a0334" alt="" />
          </div>
        </div>
      </div>
    );
  };

export default UpdateReview;