import React from "react";

// Icons
import { GrUserWorker, GrSettingsOption } from "react-icons/gr";
import { FaAddressCard } from "react-icons/fa";

const ColumnTwo = () => {
  return (
    <>
      <div className="w-full flex bg-white px-[20px] ">
        <div className="w-1/2 h-[300px] bg-light-white flex justify-center items-center">
          <div className="flex items-center gap-5">
            <div>
              <GrUserWorker size={60} className="ml-3" />
            </div>
            <div>
              <h3 className="pt-8 font-[800] text-[20px]">
                Expert & Professional
              </h3>
              <p className="pt-3 font-[500] text-[16px] text-gray">
                Separated they live in. A small river named Duden flows.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[300px] bg-yellow flex justify-center items-center">
          <div className="flex items-center gap-5">
            <div>
              <GrSettingsOption size={60} className="ml-3" />
            </div>
            <div>
              <h3 className="pt-8 font-[800] text-[20px]">High Quality Work</h3>
              <p className="pt-3 font-[500] text-[16px] text-black">
                Separated they live in. A small river named Duden flows.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[300px] bg-dark-blue flex justify-center items-center">
          <div className="flex items-center gap-5">
            <div>
              <FaAddressCard size={60} className="text-yellow ml-3" />
            </div>
            <div>
              <h3 className="pt-8 font-[800] text-[20px] text-white">
                24/7 Help Support
              </h3>
              <p className="pt-3 font-[500] text-[16px] text-gray">
                Separated they live in. A small river named Duden flows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColumnTwo;
