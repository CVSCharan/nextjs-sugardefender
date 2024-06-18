"use client";
import React from "react";

const ButtonComp = () => {
  const handleClick = () => {
    window.open(
      "https://0e319awxycbkakbr99qdp1jxdq.hop.clickbank.net",
      "_blank"
    );
  };

  return (
    <div className="w-full flex justify-center items-center mt-10">
      <button
        className="btn btn-primary self-center w-1/4 text-2xl"
        onClick={handleClick}
      >
        Buy Now
      </button>
    </div>
  );
};

export default ButtonComp;
