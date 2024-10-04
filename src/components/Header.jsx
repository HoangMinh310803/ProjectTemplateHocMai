import React from "react";

function Header() {
  return (
    <div>
      <div className="header h-14 flex-shrink-0 flex items-center justify-between sm:h-16 relative">
        <div className="flex items-center justify-between w-full sm:w-auto sm:ml-20 p-2 hidden sm:flex">
          <div className="flex items-center">
            <img
              src="./image/Frame2.png"
              className="h-4 w-8 flex-shrink-0"
              alt="logo nhỏ"
            />
            <span className="text-white p-2 hidden sm:inline-block">
              Các khóa học
            </span>
          </div>
          <input
            type="search"
            placeholder="Tìm kiếm..."
            className="ml-4 p-2 rounded border border-gray-300 w-full sm:w-auto"
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="./image/logo.png" alt="logo" className="h-8 sm:h-10" />
        </div>
      </div>
    </div>
  );
}

export default Header;
