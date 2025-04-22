import React from 'react';
import bannerImg from "../../assets/banner-img-1.png";
import { useLoaderData, useLocation } from 'react-router';
import Doctor from '../Doctor/Doctor';

const Home = () => {
    const [viewAllDoctors, setViewAllDoctors] = React.useState(false);
    const location = useLocation();
    const loaderData = useLoaderData();
    
    // State for doctor data with proper initialization
    const [data, setData] = React.useState(() => {
        // First check for navigation state
        if (location.state?.doctorData) {
            return location.state.doctorData;
        }
        // Then fall back to loader data
        return Array.isArray(loaderData) ? loaderData : [];
    });

    // Handle cases where navigation state updates after initial render
    React.useEffect(() => {
        if (location.state?.doctorData) {
            setData(location.state.doctorData);
            setViewAllDoctors(false); // Reset to show only 6 doctors
        }
    }, [location.state]);

    const handleViewAllDoctors = () => {
        setViewAllDoctors(true);
    }

    // Calculate doctors to display
    const doctorsToShow = viewAllDoctors ? data : data.slice(0, 6);

    return (
        <div className='max-w-screen-xl mx-auto '>
            <div className='flex flex-col items-center justify-center bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] rounded-3xl py-10 px-6 gap-8 mt-10'>
                <h1 className='text-4xl font-bold text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='text-base text-gray-500 text-center w-3/4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <div className='flex items-center justify-center gap-4'>
                    <input type="text" className='bg-white border-2 border-gray-300 px-6 lg:w-[400px] py-2 rounded-3xl' placeholder='Search any doctor'/>
                    <button className='btn bg-[#176AE5] rounded-3xl text-white font-bold px-5'>Search Now</button>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mt-5 p-6'>
                    <img src={bannerImg} alt="" className='h-[300px]'/>
                    <img src={bannerImg} alt="" className='h-[300px]' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 mt-12'>
                <h1 className='text-3xl font-bold text-center'>Our Best Doctors</h1>
                <p className='text-base text-gray-500 text-center w-3/4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {doctorsToShow.length > 0 ? (
                        doctorsToShow.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    ) : (
                        <p className="col-span-3 text-center text-gray-500">No doctors available</p>
                    )}
                </div>
                
                {!viewAllDoctors && data.length > 6 && (
                    <div>
                        <button 
                            onClick={handleViewAllDoctors} 
                            className='bg-[#0751bf] hover:bg-green-600 cursor-pointer text-white border border-[#0751bf] hover:border-green-600 text-lg font-bold p-2 px-10 rounded-4xl mt-8'
                        >
                            View all doctors
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;