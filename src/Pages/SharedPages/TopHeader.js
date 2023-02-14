import React from 'react';

const TopHeader = () => {
    return (
        <div className='bg-gray-800 flex justify-between py-4 px-6'>
            <h2 className="text-xl text-orange-500">
                E-Health <span className='text-white'>Care</span> Medicine Shop
            </h2>
            <h5 className='text-white text-xl font-bold'>Hi Guest</h5>

        </div>
    );
};

export default TopHeader;