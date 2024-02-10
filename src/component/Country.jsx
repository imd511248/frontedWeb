import React, { useState } from "react";
import CityData from "./CityData.json";

const Country = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [cityName, setCityName] = useState("");

  const handleCountryChange = (e) => {
    setSelectedState("");
    setSelectedCountry(e.target.value);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setCityName("");
  };
  const handleCityChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6 p-6 max-w-md mx-auto bg-white shadow-md shadow-indigo-300 rounded-lg mt-4">
      <select className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {CityData.map((item, i) => (
          <option key={i} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <select className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {CityData.find((item) => item.country === selectedCountry).state.map((state, index) => (
            <option key={index} value={state.stateName}>
              {state.stateName}
            </option>
          ))}
        </select>
      )}

      {selectedState && (
        <select className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" value={cityName} onChange={handleCityChange}>
          <option value="">Select City</option>
          {CityData.find((item) => item.country === selectedCountry)
            .state.find((state) => state.stateName === selectedState)
            .cityname.map((city, i) => (
              <option key={i} value={city.city}>
                {city.city}
              </option>
            ))}
        </select>
      )}
    </div>
  );
};

export default Country;
