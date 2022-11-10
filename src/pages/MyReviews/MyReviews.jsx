import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';
import useTitle from '../../hooks/useTitle';
import ReviewTableRow from '../ReviewTableRow/ReviewTableRow';

export const MyReviews = () => {
    const { logOut, user } = useContext(authContext);
    const email = user.email;
    const title = useTitle();
    title("MyReviews-PhoneFix");
    const [reviews, setReviews] = useState([]);
    const deleteHandeler = (id) => {
        fetch(`http://localhost:4000/my-review/delete/${ id }`,{
            method:"DELETE"
        }).then(res => res.json()).then(result => {
            if(result.deletedCount > 0){
                const remaining = reviews.filter(review => review.productId !== id);
                setReviews(remaining);
            }
        })
    }
    useEffect(() => {
        fetch(`http://localhost:4000/reviews/${ email }`, {
            headers:{
                auth_token:`Bearer ${ localStorage.getItem('access_token')}`
            }
        })
          .then(res => {
            if(res.status === 401 || res.status === 403 ){
                toast.error("Unauthorized access!");
                logOut();
            };
            return res.json();
          })
          .then(datas => {
            if (datas.length > 0) {
              setReviews(datas);
            }
    
          })
          .catch(err => console.log(err));
      }, [ email, logOut ]);
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{minHeight:"55vh"}}>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>User Info</th>
                            <th>Service Name</th>
                            <th>Review</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews && reviews.map(review => <ReviewTableRow
                                key={ review._id}
                                deleteHandeler={ deleteHandeler }
                                review={ review } />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default MyReviews;