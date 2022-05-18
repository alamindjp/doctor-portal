import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='mt-20 mx-10'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* page content here */}
                    <h1 className='text-3xl font-bold text-purple-400'>Dashboard</h1>
                    <Outlet/>
                    {/* Sidebar content here */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-90 bg-base-100 text-base-content">

                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        <li><Link to='/dashboard/review'>My Review</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;