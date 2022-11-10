import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

export const ThreeProducts = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://phonefix-server.vercel.app/home/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
                        Our Services
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d9d7687a-355f-4502-8ec4-7945db034688"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d9d7687a-355f-4502-8ec4-7945db034688)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">Best</span>
                    </span>{' '}
                    service, is the key principal of my work.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    I provide good service. I am very experience. So you can rely on me without any doubt. If you still think you need to know more about me then please checkout my reviews page. Thanks
                </p>
            </div>
            {/* <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">*/}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        services.map(service =><ServiceCard key={service._id} service={service} />)
                    }
                </div>
            </div>
            <div className="text-center">
                <Link
                    to="/services"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-green-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    See more
                </Link>
            </div>
        </div>
    );
};

export default ThreeProducts;