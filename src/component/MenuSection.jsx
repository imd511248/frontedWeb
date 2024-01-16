import React from "react";

const MenuSection = () => {
  return (
    <>
      <menu className="w-4/5 mx-auto">
        <span className="mr-2">
          <i class="fa-solid fa-house text-gray-400 text-xl font-semibold"></i>
        </span>
        <span className="mx-1">
          <i class="fa-solid fa-chevron-right text-blue-900"></i>
        </span>
        <span className="text-gray-400 text-xl font-semibold"> Flashcard</span>
        <span className="mx-1">
          <i class="fa-solid fa-chevron-right text-blue-900"></i>
        </span>
        <span className="text-gray-400 text-xl font-semibold">Mathematics</span>
        <span className="mx-1">
          <i class="fa-solid fa-chevron-right text-blue-900"></i>
        </span>
        <span className="text-blue-900 text-xl font-semibold">Relation and Function</span>
      </menu>
    </>
  );
};

export default MenuSection;
