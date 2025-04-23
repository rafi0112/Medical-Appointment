import React, { useRef, useEffect, useState } from 'react';
import bannerImg from "../../assets/banner-img-1.png";
import { useLoaderData, useLocation } from 'react-router';
import Doctor from '../Doctor/Doctor';
import CountUp from 'react-countup';

// Move the custom hook outside the component
const useVisibilitySensor = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, options);
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [options]);
    
    return [isVisible, ref];
};

const Home = () => {
    const [viewAllDoctors, setViewAllDoctors] = React.useState(false);
    const location = useLocation();
    const loaderData = useLoaderData();
    
    const [data, setData] = React.useState(() => {
        if (location.state?.doctorData) {
            return location.state.doctorData;
        }
        return Array.isArray(loaderData) ? loaderData : [];
    });

    React.useEffect(() => {
        if (location.state?.doctorData) {
            setData(location.state.doctorData);
            setViewAllDoctors(false);
        }
    }, [location.state]);

    const handleViewAllDoctors = () => {
        setViewAllDoctors(true);
    }

    const doctorsToShow = viewAllDoctors ? data : data.slice(0, 6);

    const statsCards = [
        {
            "image": "https://i.ibb.co.com/HT4f3zkJ/success-patients.png",
            "title": "Patients",
            "value": "+3000"
        },
        {
            "image": "https://i.ibb.co.com/MDvM9yMN/success-review.png",
            "title": "Success review",
            "value": "+9000"
        },
        {
            "image": "https://i.ibb.co.com/TxYq3Ymw/logo.png",
            "title": "Total stuffs",
            "value": "+1000"
        },
        {
            "image": "https://i.ibb.co.com/JR0Xng8R/success-doctor.png",
            "title": "Doctors",
            "value": "+2000"
        }
    ];

    // Call hooks for all stats cards at the top level
    const [patientsVisible, patientsRef] = useVisibilitySensor({
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    const [reviewsVisible, reviewsRef] = useVisibilitySensor({
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    const [stuffsVisible, stuffsRef] = useVisibilitySensor({
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    const [doctorsVisible, doctorsRef] = useVisibilitySensor({
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    const visibilityData = [
        { isVisible: patientsVisible, ref: patientsRef },
        { isVisible: reviewsVisible, ref: reviewsRef },
        { isVisible: stuffsVisible, ref: stuffsRef },
        { isVisible: doctorsVisible, ref: doctorsRef }
    ];

    return (
        <div className='max-w-screen-xl mx-auto'>
            {/* Banner Section */}
            <div className='flex flex-col items-center justify-center bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF] rounded-3xl py-10 px-6 gap-8 mt-10'>
                <h1 className='text-4xl font-bold text-center'>Dependable Care, Backed by Trusted <br /> Professionals.</h1>
                <p className='text-base text-gray-500 text-center w-3/4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
                <div className='flex items-center justify-center gap-4'>
                    <input type="text" className='bg-white border-2 border-gray-300 px-6 lg:w-[400px] py-2 rounded-3xl' placeholder='Search any doctor'/>
                    <button className='btn bg-[#176AE5] rounded-3xl text-white font-bold px-5'>Search Now</button>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-4 mt-5 p-6'>
                    <img src={bannerImg} alt="Medical banner" className='h-[300px]'/>
                    <img src={bannerImg} alt="Medical banner" className='h-[300px]' />
                </div>
            </div>

            {/* Doctors Section */}
            <div className='flex flex-col items-center justify-center gap-4 mt-12'>
                <h1 className='text-3xl font-bold text-center'>Our Best Doctors</h1>
                <p className='text-base text-gray-500 text-center w-3/4'>Connect with verified, experienced doctors across various specialties.</p>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {doctorsToShow.length > 0 ? (
                        doctorsToShow.map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                    ) : (
                        <p className="col-span-3 text-center text-gray-500">No doctors available</p>
                    )}
                </div>
                
                {!viewAllDoctors && data.length > 6 && (
                    <button 
                        onClick={handleViewAllDoctors} 
                        className='bg-[#0751bf] hover:bg-green-600 text-white border border-[#0751bf] hover:border-green-600 text-lg font-bold p-2 px-10 rounded-full mt-8 transition-colors'
                    >
                        View all doctors
                    </button>
                )}
            </div>

            {/* Stats Cards Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 p-4'>
                {statsCards.map((card, index) => (
                    <div ref={visibilityData[index].ref} key={index} className="card bg-base-100 lg:w-64 h-52 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img src={card.image} alt={card.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-4xl">
                                {visibilityData[index].isVisible ? (
                                    <CountUp
                                        end={parseInt(card.value.replace('+', ''))}
                                        prefix="+"
                                        duration={2.5}
                                        separator=","
                                        decimals={0}
                                    />
                                ) : (
                                    <span>+0</span>
                                )}
                            </h2>
                            <p className='font-semibold'>{card.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;