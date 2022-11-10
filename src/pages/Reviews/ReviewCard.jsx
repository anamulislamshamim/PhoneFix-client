import React from 'react';
import { Link } from 'react-router-dom';

const ReviewCard = ({ review, deleteReview }) => {
    return (
        <div className="p-8 bg-white border rounded shadow-sm">
            <div className='flex justify-between items-center'>
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600">{review.date}</span>
                </p>
                <p>
                    {
                        review.myreview ? <>
                            {/* <Link to=""><button className="btn btn-ghost text-gray-800 p-1 mr-3">Update</button></Link> */}
                            <button onClick={ () => deleteReview(review._id) } className="btn btn-ghost text-red-800 p-1">Delete</button>
                        </> : ""
                    }
                </p>
            </div>
            <p className="mb-5 text-gray-700">
                {review.review}
            </p>
            <div className="flex items-center">
                <p aria-label="Author" title="Author" className="mr-3">
                    <img
                        src={review.image}
                        alt="avatar"
                        className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                </p>
                <div>
                    <p
                        aria-label="Author"
                        title="Author"
                        className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        {review.name}
                    </p>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                        Author
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;