import React, { useState } from 'react'
import Doctor from '../Doctor/Doctor';
import { useLoaderData, useParams } from 'react-router';
import { useNavigate } from 'react-router';
import doctorSample from "../../assets/doctor-sample.png"
import { TbCircleLetterR } from "react-icons/tb";
import { FaCircleExclamation } from "react-icons/fa6";
import {addToStoredBookings} from '../../utility/addToDB';

const DoctorDetails = () => {

    const {id} = useParams();
    // console.log(id);
    const doctorDetails = useLoaderData();
    // console.log(doctorDetails);
    const doctor = doctorDetails.find(doctorDetails => doctorDetails.id == id);
    // console.log(doctor);

    const [isBooked, setIsBooked] = useState(false);

    const navigate = useNavigate();
    const handleBookAppointmentNow = (id) => {
        const bookingSuccess = addToStoredBookings(id);
        setIsBooked(bookingSuccess);

        // Navigate back to home with current doctor data
        navigate(`/`, {
            state: {
                doctorData: doctorDetails, // Send all doctors data
                bookedDoctorId: id,       // Send the specific booked doctor ID
                bookingSuccess: true      // Flag for successful booking
            }
        });
    }



    
    return (
        <div className='max-w-screen-xl mx-auto p-10 bg-[#EFEFEF]'>

        <div className='card card-side flex flex-col sm:p-3 justify-between items-center rounded-3xl bg-white p-10 px-10 gap-5  shadow-sm mb-12'>
            <h1 className='text-3xl font-bold text-center'>Book an appointment</h1>
            <p className='text-gray-500 text-center'>Each doctor profile includes their image, name, qualifications, and specialty, along with their experience (highlighted with a ‘+’ prefix). The profile also displays their consultancy fee (numeric value for flexible currency display), hospital affiliation (name and address), and weekly availability (listed as days). A registration number validates their credentials, while a ‘View Details’ button links to their full profile page. This structured format provides patients with essential information for informed decision-making when booking appointments.</p>
        </div>


        <div className='card card-side flex flex-col bg-white p-10 px-10  shadow-sm  rounded-3xl mb-12'>
            <h1 className='text-3xl font-bold text-center'>Book an appointment</h1>
            <br />
            <hr className='border border-dashed text-gray-200' />
            <div className='flex justify-between items-center'>
                <div className=" text-sm font-semibold p-4 ">Availability</div>
                <div className=" bg-[#cff1d8] text-[#0c6825] text-sm font-semibold px-4 py-2 rounded-4xl ">Doctor Available Today</div>
            </div>
            <hr className='border text-gray-200' />
            <br />
            <div className=" bg-[#f1eacf] text-[#e4aa3e] text-sm font-semibold py-3 px-5 rounded-4xl flex items-center"> <FaCircleExclamation />
                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</div>
            <button 
                onClick={() =>  handleBookAppointmentNow(doctor.id)}
                className={`
                    ${isBooked 
                    ? 'bg-gray-400 cursor-not-allowed border-gray-400' 
                    : 'bg-[#0751bf] hover:bg-green-600 cursor-pointer border-[#0751bf] hover:border-green-600'
                    } 
                    text-white text-lg font-bold p-2 px-10 rounded-full mt-8
                    transition-colors
                `}
                disabled={isBooked}
                >
                {isBooked 
                    ? <span className='text-sm font-semibold'>Appointment Booked</span> 
                    : <span className='text-sm font-semibold'>Book Appointment Now</span>
                }
            </button>

        </div>


            <div className="card  flex flex-col lg:flex-row bg-white gap-6 p-10 shadow-sm rounded-3xl">
                <figure>
                    <img className='w-72'
                    src={doctorSample}
                    alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{doctor.name}</h2>
                    <p className='text-gray-600 text-base'>{doctor.education}</p>
                    <p className='text-gray-600 text-base '>Working at <br /><span className='text-black font-bold '>{doctor.hospital.name}</span></p>
                    <hr className='border border-dashed text-gray-300' />
                    <p className='flex items-center gap-2 text-gray-600'><TbCircleLetterR className='text-lg'/>
                                        Reg No : {doctor.registrationNumber} </p>
                                        <hr className='border border-dashed text-gray-300' />
                    <p className='font-bold flex flex-col lg:flex-row items-center mt-2'>Availability:  <span className='mt-2'>
                        {
                            doctor.availability.map((avail,index) => {
                                return <span key={index} className='text-[#FFA000] bg-[#ecdabb] font-semibold mx-1 p-1 px-3 rounded-full'>{avail}</span>
                            })
                        }
                        </span></p>
                    <p className='font-bold'>Consultation Fee: <span className='text-blue-500'>Taka:{doctor.consultancyFee}<span className='text-gray-400'> (incl.vat)</span> Per consultation
                        </span></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
       
    )
}

export default DoctorDetails