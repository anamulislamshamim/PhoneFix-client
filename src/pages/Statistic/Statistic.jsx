import React from 'react';
import "./Static.css";

export const Statistic = () => {
    return (
        <div className='statistic mt-10'>
            <div className='text-white bg-black opacity-70 py-20'>
                <div class="bg-black px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div class="grid row-gap-8 sm:grid-cols-3">
                        <div class="text-center">
                            <h6 class="text-5xl font-bold text-deep-purple-accent-400">11k</h6>
                            <p class="font-bold">Customers</p>
                        </div>
                        <div class="text-center">
                            <h6 class="text-5xl font-bold text-deep-purple-accent-400">3.9K</h6>
                            <p class="font-bold">Reviws</p>
                        </div>
                        <div class="text-center">
                            <h6 class="text-5xl font-bold text-deep-purple-accent-400">27.3K</h6>
                            <p class="font-bold">Successfully Works</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;