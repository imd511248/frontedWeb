import React from "react";

const Faq = () => {
  const clickHandler = (e) => {
    if (e === "one") {
      let one = document.querySelector(".one");
      let one1 = document.querySelector(".icon1");
      if (one.style.display === "none" || one.style.display === "") {
        one.style.display = "block";
        one1.style.transform = "rotate(180deg)";
      } else {
        one.style.display = "none";
        one1.style.transform = "rotate(0deg)";
      }
    }
    // ......................
    if (e === "two") {
      let one = document.querySelector(".two");
      let one2 = document.querySelector(".icon2");
      if (one.style.display === "none" || one.style.display === "") {
        one.style.display = "block";
        one2.style.transform = "rotate(180deg)";
      } else {
        one.style.display = "none";
        one2.style.transform = "rotate(0deg)";
      }
    }
    // ...........................
    if (e === "three") {
      let one = document.querySelector(".three");
      let one3 = document.querySelector(".icon3");
      if (one.style.display === "none" || one.style.display === "") {
        one.style.display = "block";
        one3.style.transform = "rotate(180deg)";
      } else {
        one.style.display = "none";
        one3.style.transform = "rotate(0deg)";
      }
    }
  };

  return (
    <>
      <div className="mt-24 mb-52 w-4/5 mx-auto">
        <p className="font-bold text-5xl my-4 text-blue-900">FAQ</p>
        <div className="flex justify-between border-2 border-blue-400 w-2/3 rounded-lg items-start px-6 py-3 mt-4">
          <p>
            <p className="text-xl">Can education flashcards be used for all age groups?</p>
            <p className="one pt-3 hidden">
              Yes, education flashcards can be tailored to be diffrent age groups and learning levels. There are flashcard designed for preschoolers, elementry school student, high
              school students, and even for collage-level and adult learners.
            </p>
          </p>
          <i onClick={(e) => clickHandler("one")} className="icon1 fa-solid fa-chevron-down text-black font-extrabold"></i>
        </div>
        {/* .....................  */}
        <div className="flex justify-between border-2 border-blue-400 w-2/3 rounded-lg items-start px-6 py-3 mt-4">
          <p>
            <p className="text-xl">Can education flashcards be used for all age groups?</p>
            <p className="two pt-3 hidden">
              Yes, education flashcards can be tailored to be diffrent age groups and learning levels. There are flashcard designed for preschoolers, elementry school student, high
              school students, and even for collage-level and adult learners.
            </p>
          </p>
          <i onClick={(e) => clickHandler("two")} className="icon2 fa-solid fa-chevron-down text-black font-extrabold"></i>
        </div>
        <div className="flex justify-between border-2 border-blue-400 w-2/3 rounded-lg items-start px-6 py-3 mt-4">
          <p>
            <p className="text-xl">Can education flashcards be used for all age groups?</p>
            <p className="three pt-3 hidden">
              Yes, education flashcards can be tailored to be diffrent age groups and learning levels. There are flashcard designed for preschoolers, elementry school student, high
              school students, and even for collage-level and adult learners.
            </p>
          </p>
          <i onClick={(e) => clickHandler("three")} className="icon3 fa-solid fa-chevron-down text-black font-extrabold"></i>
        </div>
      </div>
    </>
  );
};

export default Faq;
