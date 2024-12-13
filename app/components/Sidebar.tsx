import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-1/5 m-4 p-5 bg-stone-50">
          <h1 className="text-4xl font-bold p-2"> GENPOS</h1>
          
          <div className="m-4 font-bold">
          <div className="mt-4"><a href="">Dashboard</a></div>
          <div className="mt-4"><a href="">Purchase</a></div>
          <div className="dropdown mt-4 dropdown-bottom">
           <div tabIndex={0} role="button" className="btn text-l m-1">Business unit</div>
              <ul tabIndex={0} className="list-disc ml-4 menu rounded-box z-[1] w-52 p-2">
                <li className="mt-2"><a>Groups</a></li>
                <li className="mt-2"><a>Companies</a></li>
                <li className="mt-2"><a>Brands</a></li>
                <li className="mt-2"><a>Outlets</a></li>
                <li className="mt-2"><a>Warehouses</a></li>
              </ul>
          </div>
          <div className="mt-4"><a href="">Catalog</a></div>
          <div className="mt-4"><a href="">User</a></div>
          <div className="mt-4"><a href="">Configurations</a></div>
          <div className="mt-4"><a href="">System</a></div>
        </div>
      

        </div>
    );
};

export default Sidebar;