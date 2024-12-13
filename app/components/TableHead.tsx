import React from 'react';

const TableHead = () => {
    return (
        
        <div className="flex justify-between p-4 bg-gray-50">
            <div className="text-center w-1/6">LOGO</div>
            <div className="text-center w-1/6">NAME</div>
            <div className="text-center w-1/6">Group</div>
            <div className="text-center w-1/6">VAT NUMBER</div>
            <div className="text-center w-1/6">ACTIVE</div>
            <div className="text-center w-1/6"></div>
        </div>
        
    );
};

export default TableHead;