import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Reviews from '../Reviews/Reviews';
import ServiceCard from '../ServiceCard/ServiceCard';

export const Services = () => {
    const [services, setServices] = useState([]);
    const title = useTitle();
    title("Service-PhoneFix");
    useEffect(() => {
        fetch("https://phonefix-server.vercel.app/services")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [services]);
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-green-400 text-white rounded-full">All Services</p>
                            </div>
                            <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
                                Any problem
                                <br className="hidden md:block" />
                                with your phone{' '}
                                <span className="inline-block text-deep-purple-accent-400">is fixable!</span>
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg">I am providing many services like fix hardware, solve the software problem issue and also gives the advice how to protect your phone from malware, viruses and also from hacking. I am optimistic you will be happy with my service. Thanks for being with PhoneFix.</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                                <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                            </a>
                            <a href="/" className="w-32 transition duration-300 hover:shadow-lg">
                                <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:w-1/2">
                        <img src={`https://st.depositphotos.com/1000941/3150/i/950/depositphotos_31503393-stock-photo-phone-service-on-white-background.jpg`} alt="" />
                    </div>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service} />)
                    }
                </div>
            </div>
            <div>
                <Reviews />
            </div>
        </>
    );
};

export default Services;