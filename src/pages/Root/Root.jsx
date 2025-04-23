import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Outlet, useRouteError } from 'react-router'
import Footer from '../../components/Footer/Footer'
const Root = () => {

    const error = useRouteError();

    return (
        <div className='bg-[#EFEFEF]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {!error && <Footer></Footer>}
        </div>
    )
}

export default Root