/* eslint-disable no-unused-vars */
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { authContext } from '../../contexts/AuthContext';
import ReviewCard from './ReviewCard';

export const Reviews = () => {
  const { user } = useContext(authContext);
  const [reviews, setReviews] = useState([]);
  const deleteReview = (id) => {
    fetch(`https://phonefix-server.vercel.app/review/delete/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaining = reviews.filter(review => review._id !== id);
          setReviews(remaining);
        }
      })
  };
  useEffect(() => {
    fetch("https://phonefix-server.vercel.app/reviews")
      .then(res => res.json())
      .then(datas => {
        if (datas.length > 0) {
          if (user) {
            const myreviews = datas.filter(data => data.email === user.email);
            const othersReviews = datas.filter(data => data.email !== user.email);
            myreviews.forEach(element => element.myreview = true);
            const totalreviws = [...myreviews, ...othersReviews];
            setReviews(totalreviws);
          }else {
            setReviews(datas);
          };
        }

      })
      .catch(err => console.log(err));
  }, [user]);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className='text-center text-orange-400 font-semibold text-3xl p-1 rounded-lg mb-10'>Our Customer Reviews</h1>
      {/* <Link className='p-2 bg-green-400 text-white font-semibold rounded' to="/add-review"><button className='mb-5'>Add your review</button></Link> */}
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          reviews.length === 0 ? "No reviws available!" : reviews.map(review => <ReviewCard deleteReview={deleteReview} key={review._id} review={review} />)
        }
      </div>
    </div>
  );
};

export default Reviews;