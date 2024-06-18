import React from "react";
import Image from "next/image";
import { ingredents } from "./MainPageFun";
import ButtonComp from "../Button/ButtonComp";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center bg-slate-300 h-full w-full text-black p-2">
      <div className="bg-sky-100 h-full w-full rounded-3xl p-5">
        <div className="mb-10">
          <Image
            src="/money-back-img.webp"
            alt="Money Back Guarantee"
            width={80}
            height={40}
            className="mx-auto mb-4"
          />
          <h2 className="text-xl text-center">
            100% Satisfaction Guaranteed 60-Day Money Back Guarantee
          </h2>
        </div>
        <h2 className="text-2xl text-center">
          Inside Every Sugar Defender Drop Find:
        </h2>
        <div className="flex justify-evenly items-center mt-10 bg-slate-200 flex-wrap h-2/4">
          {ingredents.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center bg-sky-100 w-1/5 m-5 rounded-2xl"
            >
              <Image
                src={item.img}
                alt={item.img}
                height={50}
                width={100}
                className="mb-2 mt-2 rounded-xl"
              />
              <h2 className="text-md text-center font-bold mb-1">
                {item.name}
              </h2>
              <h2 className="text-sm text-center mb-2">{item.message}</h2>
            </div>
          ))}
        </div>
        <h2 className="text-3xl text-center mt-10">
          The #1 Rated Blood Sugar Formula
        </h2>
        <ButtonComp />
      </div>
    </div>
  );
};

export default MainPage;
