import React from 'react';
import "./Static.css";

export const Statistic = () => {
    return (
        <div className='statistic mt-32'>
            <div className='text-white bg-black opacity-70 py-20'>
                <div className="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid row-gap-8 sm:grid-cols-3">
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-deep-purple-accent-400">11k</h6>
                            <p className="font-bold">Customers</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-deep-purple-accent-400">3.9K</h6>
                            <p className="font-bold">Reviws</p>
                        </div>
                        <div className="text-center">
                            <h6 className="text-5xl font-bold text-deep-purple-accent-400">27.3K</h6>
                            <p className="font-bold">Successfully Works</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;