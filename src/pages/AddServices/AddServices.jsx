import React, { useContext, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { authContext } from '../../contexts/AuthContext';
import useTitle from '../../hooks/useTitle';
import ServiceTableRow from '../ServiceTableRow/ServiceTableRow';

export const AddServices = () => {
    const { logOut, user } = useContext(authContext);
    const email = user.email;
    const title = useTitle();
    title("AddService-PhoneFix");
    const [services, setServices] = useState([]);
    const deleteHandeler = (id) => {
        fetch(`http://localhost:4000/service/delete/${ id }`,{
            method:"DELETE"
        }).then(res => res.json())
        .then(result => {
            if(result.deletedCount > 0){
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
                toast.success("Successfully deleted!");
            };
        })
    };
    useEffect(() => {
        fetch(`http://localhost:4000/add-service/${ email }`, {
          headers:{
            auth_token:`Bearer ${ localStorage.getItem("access_token")}`
          }
        })
            .then(res => {
              if(res.status === 401 || res.status === 403){
                toast.error("Unauthorized access!");
                logOut();
              }
              return res.json();
            })
            .then(data => {
                setServices(data);
            })
    },[ email, logOut ]);
    const addServiceHandeler = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const price ="$"+form.price.value;
        const image = form.imageLink.value;
        const description = form.description.value;
        const newService = {
            price:price,
            picture:image,
            name:serviceName,
            description:description
        };
        console.log(newService);
        fetch(`http://localhost:4000/add-service`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(newService)
        })
        .then(res => res.json())
        .then(result => {
            if(result.acknowledged){
                setServices((prev) => [newService,...prev]);
                toast.success("successfully added!");
                form.reset();
            }
        })
    };
    return (
      <>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row lg:flex-row-reverse">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="w-full">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Service Info
                </h3>
                <form onSubmit={ addServiceHandeler }>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="serviceName"
                      className="inline-block mb-1 font-medium"
                    >
                      service name
                    </label>
                    <input
                      placeholder="wifi does not connect!"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="serviceName"
                      name="serviceName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="price"
                      className="inline-block mb-1 font-medium"
                    >
                      price
                    </label>
                    <input
                      placeholder="$450"
                      required
                      type="number"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="price"
                      name="price"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="imageLink"
                      className="inline-block mb-1 font-medium"
                    >
                      image
                    </label>
                    <input
                      placeholder="http://freepik.com"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="imageLink"
                      name="imageLink"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="description"
                      className="inline-block mb-1 font-medium"
                    >
                      service description
                    </label>
                    <textarea
                      placeholder="write a relevant description..."
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="description"
                      name="description"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-400 focus:shadow-outline focus:outline-none"
                    >
                     Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <img src="https://img.freepik.com/free-vector/concept-landing-page-image-upload_52683-26839.jpg?w=1380&t=st=1668024014~exp=1668024614~hmac=9110e09cbc8aee3db04ee66342c0ab3818525a23b50093ba368c74a2ed9df7ca" alt="" />
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" style={{minHeight:"55vh"}}>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Service Info</th>
                            <th>Service Type</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services && services.map(service => <ServiceTableRow
                                key={ service._id}
                                deleteHandeler={ deleteHandeler }
                                service={ service } />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
      </>
    );
  };

export default AddServices;