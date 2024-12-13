import React from 'react';

const Header = () => {
    return (
        <div>
            <header>
          <div className="flex justify-between">
            <div className="flex m-4 w-1/3 relative"><input 
                    className="border-2 p-2 w-full rounded-lg outline-none" 
                    type="search"  
                    name="search"
                    placeholder="search"
                    value="Search your page..." />
                <button className="bg-blue-600 px-4 py-1 rounded-lg"> ⌘K</button>
            </div>
            <div className="flex m-4">
              <button className="bg-slate-200 p-2 m-2 rounded-lg">abc</button>
              <button className="bg-slate-200 p-2 m-2 rounded-lg">abc</button>
              <button className="bg-slate-200 p-2 m-2 rounded-lg">abc</button>
              <button className="bg-slate-200 p-2 m-2 rounded-full">abc</button>
            </div>
          </div>
        </header>
        </div>
    );
};

export default Header;