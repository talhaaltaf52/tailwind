import React from "react";

// Icons
import { MdConstruction, MdArchitecture } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { Gi3DStairs } from "react-icons/gi";

const ColumnOne = () => {
  return (
    <>
      <div className="py-[100px] px-[20px] w-full flex gap-6 bg-white ">
        <div className="w-1/2 shadow-xl h-[300px] bg-light-white flex justify-center items-center">
          <div className="flex flex-col text-center items-center ">
            <MdConstruction size={80} className="border-2 border-yellow text-[dark-blue] rounded-full p-2 bg-yellow" />
            <h3 className="pt-8 font-[800] text-[20px]">Construction</h3>
            <p className="pt-3 font-[500] text-[16px] text-gray">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
        <div className="w-1/2 shadow-xl h-[300px] bg-light-white flex justify-center items-center ">
          <div className="flex flex-col text-center items-center">
            <BsBuildings size={80} className="border-2 border-yellow text-[dark-blue] rounded-full p-2 bg-yellow" />
            <h3 className="pt-8 font-[800] text-[20px]">House Renovation</h3>
            <p className="pt-3 font-[500] text-[16px] text-gray">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
        <div className="w-1/2 shadow-xl h-[300px] bg-light-white flex justify-center items-center ">
          <div className="flex flex-col text-center items-center">
            <Gi3DStairs size={80} className="border-2 border-yellow text-[dark-blue] rounded-full p-2 bg-yellow" />
            <h3 className="pt-8 font-[800] text-[20px]">Painting</h3>
            <p className="pt-3 font-[500] text-[16px] text-gray">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
        <div className="w-1/2 shadow-xl h-[300px] bg-light-white flex justify-center items-center ">
          <div className="flex flex-col text-center items-center">
            <MdArchitecture size={80} className="border-2 border-yellow text-[dark-blue] rounded-full p-2 bg-yellow" />
            <h3 className="pt-8 font-[800] text-[20px]">Architecture Design</h3>
            <p className="pt-3 font-[500] text-[16px] text-gray">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnOne;
