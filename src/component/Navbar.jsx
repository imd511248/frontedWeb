import React from "react";
import logo from "../assets/images/logo.txt";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between w-4/5 mx-auto my-9">
        <div className="h-10 w-60">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center text-xl font-bold gap-5 text-gray-600">
          <div>Home</div>
          <div>FlashCard</div>
          <div>Contact</div>
          <div>FAQ</div>
          <button className="bg-blue-700 rounded-3xl px-10 py-2 text-white border-2 border-blue-700">Login</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
