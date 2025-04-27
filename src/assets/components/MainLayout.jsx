// layouts/MainLayout.jsx
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div className="bg-white  h-full flex items-center justify-center  overflow-y-scroll scrollbar-hide">
            < div className="w-[325px]  h-[100vh] bg-[#F7F8F9] border-x-2 border-gray-200" >
                {children}
            </div >
        </div >
    );
};

export default MainLayout;
