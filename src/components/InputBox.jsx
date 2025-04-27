import React from "react";

const InputBox = ({
  name,
  type = "text",
  placeholder,
  requireStar = "true",
}) => {
  return (
    <div className="my-2 relative">
      <label className="text-xs font-medium text-[#7e46ee] block mb-[-20px] mx-2 px-2 bg-[#F7F8F9] w-fit absolute">
        {name}
        {requireStar && <span className="text-red-500">*</span>}{" "}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-[40px] border-[#E4E7EC] border-3 rounded-[6px] text-[#5d5a62] font-medium p-3 mt-2 text-xs"
      />
    </div>
  );
};

export default InputBox;
