import React from "react";
import serviceIcon from "../../assets/images/home/service_icon.png";

const WhereCanWeHelpCard = () => {
  return (
    <div className="group duration-300 flex flex-col items-center justify-center rounded-md shadow-md w-96">
      <div className=" flex justify-center py-16 px-16 bg-[#8b8b8b] group-hover:bg-white duration-300 w-full rounded-t-md overflow-hidden cursor-pointer">
        <img
          className=" w-[70%]"
          src={serviceIcon}
          alt=""
        />
      </div>
      <div className=" group-hover:bg-indigo duration-300 flex flex-col gap-3 pt-6 pb-8 px-2 sm:px-3 md:px-5 xl:px-6 rounded-b-md">
        <h1 className=" font-semibold text-2xl text-indigo group-hover:text-white duration-300">
          Deliver Strategic Insight
        </h1>
        <p className=" group-hover:text-stone-200 duration-300 text-stone-500 text-sm sm:text-base">
          Aenean sed nibh magna posueretempor. Nunc faucibus pellentesque nunc
          aliquet. Donec congue, nunc vel tempor congue, enim sapien lobortis
          ipsum.
        </p>
        <div>
          <button className=" py-1.5 px-3 text-white bg-indigo group-hover:bg-white group-hover:text-indigo hover:opacity-90 duration-300 font-medium rounded">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhereCanWeHelpCard;
