import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white text-gray-800 border rounded shadow-sm">
            {/* card w-96 bg-base-100 shadow-xl */}
            <figure className='cursor-pointer' title='click it to view the image'>
                <PhotoProvider>
                    <PhotoView src={service.picture}>
                        <img src={ service.picture } alt='' style={{width:"100%",height:"300px"}}/>
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {service.name}
                    <div className="badge badge-secondary">available</div>
                </h2>
                <p>{service.description.length > 100 ? service.description.slice(0, 100)+"...see more" : service.description}</p>
                <div>
                    {service.price}
                </div>
                <div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <div className='mt-3'>
                    <Link className='bg-orange-400 p-2 rounded text-semibold text-white' to={`/services/${service._id}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;