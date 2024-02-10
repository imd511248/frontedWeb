import React, { useState } from "react";
import state from "./Details.json";
import cityDetail from "./ChartDetails.json";
import { Shape } from "./Chart";
import Graph from "./Graph";
// import TreeChart from "./TreeChart";

const CountryDetails = () => {
  const [selectedState, setSelectedState] = useState(null);
  const stateHandler = (stateName) => {
    setSelectedState(stateName);
  };
  console.log(state);

  return (
    <>
      <div className="flex justify-center flex-wrap mt-20 md:mt-20 gap-3 items-center px-1">
        {state.map((item, i) => {
          return (
            <div
              key={i + 90}
              onClick={() => stateHandler(item.state, i)}
              className={`group md:w-1/4 xl:w-1/5 w-full h-16 text-center rounded-3xl leading-none py-4 border cursor-pointer hover:bg-green-700 relative text-lg md:text-xl ${
                item.red ? `${item.red}` : `bg-yellow-300`
              }`}>
              {item.city}
              <div className="bg-gray-300 absolute left-2 z-50 -top-24 min-w-60 text-left px-5 py-3 box-content rounded-lg group-hover:scale-100 duration-300 scale-0 origin-bottom-left opacity-90">
                <div className="mb-1">
                  <span className="text-red-400">State: </span>
                  <span className="text-gray-600">{item?.state}</span>
                </div>
                <div className="mb-1">
                  <span className="text-red-400">Population: </span>
                  <span className="text-gray-600">{item.population}</span>
                </div>
                <div>
                  <span className="text-red-400">Temperature: </span>
                  <span className="text-gray-600">{item.temperature}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`overflow-x-auto w-11/12 mx-auto my-10 ${selectedState ? "block" : "hidden"}`}>
        <Shape />
        {/* <TreeChart /> */}
        <Graph />
        <table className="w-full mx-auto mt-10 overflow-scroll">
          <thead className="text-base sm:text-lg md:text-xl font-medium w-full bg-purple-400">
            <tr>
              <th className="border-2 px-2 sm:px-3 text-left border-gray-600">City</th>
              <th className="border-2 px-2 sm:px-3 text-left border-gray-600">Year</th>
              <th className="border-2 px-2 sm:px-3 text-left border-gray-600">Increase</th>
              <th className="border-2 px-2 sm:px-3 text-left border-gray-600">Population</th>
              <th className="border-2 px-2 sm:px-3 text-left border-gray-600">Area</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base md:text-lg text-gray-800 font-medium border-2 w-full border-gray-600 bg-purple-200">
            {cityDetail[selectedState]?.map((item, index) => (
              <tr key={index}>
                <td className="border-2 px-2 sm:px-3 text-left border-gray-600">{item.city}</td>
                <td className="border-2 px-2 sm:px-3 text-left border-gray-600">{item.year}</td>
                <td className="border-2 px-2 sm:px-3 text-left border-gray-600">{item.populationInc}</td>
                <td className="border-2 px-2 sm:px-3 text-left border-gray-600">{item.totalpopul}</td>
                <td className="border-2 px-2 sm:px-3 text-left border-gray-600">{item.area}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* ................. */}
    </>
  );
};

export default CountryDetails;
