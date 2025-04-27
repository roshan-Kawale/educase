import React from "react";
import profile from "/assets/profile.png"
import img from "/assets/img.svg"

const Account = () => {
  return (
    <>
      <div className="pb-6">
        <div className="h-14 shadow-[0px_3px_6px_#00000007] bg-white flex items-center px-5 font-normal text-[18px] text-[#1D2226]">
          <h2>Account Settings</h2>
        </div>
        <div className="mt-5 px-5 flex gap-5  ">
          <div className="relative">
            <img src={profile} alt="Profile" className=" h-15 rounded-full" />

            <img
              src={img}
              alt="Profile"
              className="absolute right-0 bottom-0  w-4 h-4"
            />
          </div>

          <div>
            <h5 className="font-semibold text-sm">Marry Doe</h5>
            <p className="text-[14px] text-[#1D2226] tex-sm">Marry@Gmail.Com</p>
          </div>
        </div>
        <div className="mt-[20px] px-5 text-[10.8px] text-[#1D2226]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
        <div className="border-y-2  border-[#d8dde2] border-spacing-6 mt-5 pb-96 border-dashed"></div>
      </div>
    </>
  );
};

export default Account;
