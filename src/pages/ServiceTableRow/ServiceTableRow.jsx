import React from 'react';
import { Link } from 'react-router-dom';

const ServiceTableRow = ({ service, deleteHandeler }) => {
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => deleteHandeler(service._id)} className="btn btn-ghost btn-xs">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img style={{width:"2rem", height:"2rem","borderRadius":"50%"}} src={service.picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ service.name }</div>
                        <div className="text-sm opacity-50">{ service.email }</div>
                    </div>
                </div>
            </td>
            <td>
                {service.productName}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop and Mobile Support Technician</span>
            </td>
            <td>${service.price}</td>
            <td>{ service.description.length > 30 ? service.description.slice(0,30):service.description }</td>
            <th>
                <Link to={`/service/update/${ service._id }`} className="btn btn-ghost btn-xs">update</Link>
            </th>
        </tr>
    );
};

export default ServiceTableRow;