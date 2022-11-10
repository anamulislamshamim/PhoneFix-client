import React from 'react';
import { Link } from 'react-router-dom';

const ReviewTableRow = ({ review, deleteHandeler }) => {
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => deleteHandeler(review.productId)} className="btn btn-ghost btn-xs">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img style={{width:"2rem", height:"2rem","borderRadius":"50%"}} src={review.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ review.name }</div>
                        <div className="text-sm opacity-50">{ review.email }</div>
                    </div>
                </div>
            </td>
            <td>
                {review.productName}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>{ review.review.length > 30 ? review.review.slice(0,30):review.review }</td>
            <td>{ review.date }</td>
            <th>
                <Link to={`/review/update/${ review._id }`} className="btn btn-ghost btn-xs">update</Link>
            </th>
        </tr>
    );
};

export default ReviewTableRow;