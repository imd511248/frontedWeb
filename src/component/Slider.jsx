import React, { useState } from "react";

const Slider = () => {
  // ...................................................
  const [counter, setCounter] = useState(0);
  const images = [
    { image: "https://cdn.pixabay.com/photo/2016/02/13/21/42/kruger-1198598_1280.jpg" },
    {
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg ",
    },
    {
      image: "https://media.gettyimages.com/id/505757382/photo/jama-masjid-mosque-in-delhi.jpg?s=612x612&w=gi&k=20&c=sBvIRci9Qskao07cm154iFmyTaIKTL0pCYChXGz5s8w=",
    },
    {
      image: "https://cdn.pixabay.com/photo/2015/09/22/14/34/lion-951778_640.jpg",
    },
    {
      image: "https://cdn.pixabay.com/photo/2019/04/06/05/17/wallpaper-4106667_640.jpg",
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/01/07/15/38/ai-generated-8493395_1280.jpg",
    },
  ];
  const slideHandler = (direction) => {
    if (direction === "prev") {
      setCounter((state) => (state === 0 ? images.length - 1 : state - 1));
    } else {
      setCounter((state) => (state === images.length - 1 ? 0 : state + 1));
    }
  };
  return (
    <>
      <div className="bg-red-200 mx-auto flex justify-center pt-7">
        <div>
          {images.map((item, i) => (
            <div key={i} className={` w-52 h-40 mb-3 duration-1000 transition-all ease-in-out ${counter === i ? " block" : "hidden"}`}>
              <img src={item.image} alt="" className="w-full h-full" />
            </div>
          ))}
          <button onClick={(e) => slideHandler("prev")} className="bg-indigo-800 text-white mr-4 rounded-md px-4 py-2">
            Pre
          </button>
          <button onClick={(e) => slideHandler("next")} className="bg-indigo-800 text-white rounded-md px-4 py-2">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
