import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-purple-500 fixed w-full top-0 left-0 z-30">
        <div className="h-16 w-5/6 flex justify-between items-center mx-auto">
          <div className="flex justify-center items-center gap-4">
            <strong className="text-white text-4xl cursor-pointer">Home</strong>
          </div>
          <div className="capitalize text-2xl font-bold text-white hidden sm:block md:block lg:block xl:block 2xl:block ">.</div>
          <div className="flex space-x-3 text-white gap-3">
            <p className="cursor-pointer text-white text-2xl">login</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
