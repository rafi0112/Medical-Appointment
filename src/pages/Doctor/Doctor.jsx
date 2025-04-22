import React from 'react'
import doctorSample from "../../assets/doctor-sample.png"
import { TbCircleLetterR } from "react-icons/tb";
import { useNavigate } from "react-router";
import DoctorDetails from '../DoctorDetails/DoctorDetails';
import Navbar from '../../components/Navbar/Navbar';
const Doctor = ({doctor}) => {

    // const handleViewDetails = (id) => {
    //     console.log(id);
    //     <DoctorDetails id={id}></DoctorDetails>
    // }
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/doctor/${id}`);
    };
    

    return (

            <div className="card bg-base-100 w-80 shadow-sm p-3">
                <figure>
                    <img
                    src={doctorSample} className='w-full h-[248px] p-3 '
                    alt="doctor" />
                </figure>
                <div className="card-body gap-3 p-3">
                    <div className="card-actions ">
                        <div className="badge badge-outline bg-[#cff1d8] text-[#0c6825] text-sm font-semibold p-4 rounded-4xl ">Available</div>
                        <div className="badge badge-outline bg-[#c0d0e9] text-[#0751bf] text-sm font-semibold p-4 rounded-4xl ">{doctor.experience}</div>
                    </div>
                    <h2 className="card-title">
                        {doctor.name}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{doctor.education}</p>
                    <p className='flex items-center gap-2'><TbCircleLetterR className='text-lg'/>
                    {doctor.registrationNumber} </p>
                    <button 
                        onClick={() => handleViewDetails(doctor.id)}
                        className='cursor-pointer text-[#0751bf] border border-[#0751bf] text-lg font-bold p-2 rounded-4xl'>
                        View details
                    </button>
                </div>
            </div>
    )
}

export default Doctor