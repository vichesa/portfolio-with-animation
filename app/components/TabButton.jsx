import React from "react";

const TabButton = ({ tabActive, handleTabActive, tabName }) => {
  const buttonClasses = tabActive ? "text-white border-b" : "text-[#ADB7BE] ";
  return (
    <button
      onClick={handleTabActive}
      className={`hover:text-white hover:border-b mr-4 ${buttonClasses}`}
    >
      {tabName}
    </button>
  );
};

export default TabButton;
