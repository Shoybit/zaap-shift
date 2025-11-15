import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className="max-w-7xl mx-auto ">
            <Navbar />

            {/* Main content should grow and push footer down */}
            <div className="min-h-screen">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default RootLayout;
