import React from "react";
import MidSection from "./MidSection";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="text-blue-900 text-4xl font-bold mt-14">Relation and Function ( Mathematics )</div>
        <ul className="text-center flex justify-center gap-10 text-2xl font-semibold text-gray-500 mt-11">
          <li className="relative text-blue-900 before:absolute before:left-0 before:-bottom-2 before:bg-blue-900 before:h-[3px] before:w-full px-2">Study</li>
          <li>Quiz</li>
          <li>Test</li>
          <li>Game</li>
          <li>Others</li>
        </ul>
        <div className=" flex justify-center items-center my-10">
          <div className="rounded-3xl bg-gradient-to-r to-blue-900 via-blue-900 from-sky-700 w-3/5 h-96 relative text-white">
            <span className="absolute left-11 top-8">
              <i className="fa-regular fa-lightbulb text-2xl"></i>
            </span>
            <span className="absolute right-11 top-8">
              <i className="fa-solid fa-volume-high text-2xl"></i>
            </span>
            <p className="text-3xl font-semibold absolute left-2/4 transform -translate-x-2/4 -translate-y-2/4 top-2/4 ">9 + 6 + 7x - 2x - 3</p>
          </div>
        </div>
        <div className="flex justify-evenly w-3/5 items-center mb-24 mx-auto gap-11">
          <i className="fa-solid fa-arrow-rotate-right font-bold text-4xl pt-1 text-sky-900"></i>
          <ul className="flex justify-between items-center gap-5">
            <span className="bg-sky-900 rounded-full h-14 w-14 text-center leading-[56px]">
              <i className="fa-solid fa-chevron-left text-white text-2xl font-extrabold"></i>
            </span>
            <li className="text-black text-2xl font-bold ">01/10</li>
            <span className="bg-sky-900 rounded-full h-14 w-14 text-center leading-[56px]">
              <i className="fa-solid fa-chevron-right text-white text-2xl font-extrabold"></i>
            </span>
          </ul>
          <i className="fa-solid fa-expand font-bold text-4xl pt-1 text-sky-900"></i>
        </div>
      </div>
      <MidSection />
      <Faq />
    </>
  );
};

export default Home;
