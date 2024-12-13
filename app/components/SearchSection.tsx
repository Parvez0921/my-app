import React from 'react';

const SearchSection = () => {
    return (
        <div className="m-4 bg-stone-50 p-4 border-2 rounded-lg">
        <div className="flex justify-between rounded-lg">
          <div className="w-1/5">
            <h4 className="font-semibold ml-2">Company name</h4>
            <input className="border-2 w-full p-1 m-2 rounded-lg" type="search" name="" id="" placeholder="Company name"/>
          </div>
          <div className="w-1/5">
           <label className="block text-sm/6 font-medium text-gray-900">Group</label>
           <select className="w-full mt-2 p-2 border-2 rounded-lg" name="Group" id="group">
            <option value="">All</option>
            <option value="">Abu Jahin BB</option>
            <option value="">Hello Group Hi</option>
            <option value="">Hello Group Hi</option>
            <option value="">Standard Bujung Name</option>
            <option value="">Standard Name</option>
           </select>
          </div>
          <div className="w-1/5">
            <h4 className="font-semibold">VAT number</h4>
            <input className="border-2 w-full p-1 m-2 rounded-lg" type="search" name="" id="" placeholder="VAT number"/>
          </div>
          <div className="w-1/5">
           <label className="block text-sm/6 font-medium text-gray-900">Group</label>
           <select className="w-full mt-2 p-2 border-2 rounded-lg" name="Group" id="group">
            <option value="">All</option>
            <option value="">Active</option>
            <option value="">Inactive</option>
           </select>
          </div>

        </div>
        <div className="text-center">
          <button className="px-4 py-2 m-2 text-white font-semibold bg-blue-500 rounded-lg"> Search</button>
          <button className="px-4 py-2 m-2 bg-gray-50 font-semibold rounded-lg"> Clear</button>
        </div>
        </div>
    );
};

export default SearchSection;