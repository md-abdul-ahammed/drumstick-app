import React from "react";

const Input = ({
  type = "text",
  setValue,
  className = "",
  placeholder = "",
  label,
}) => {
  const handleWheel = (event) => {
    event.target.blur(); // Prevents the default scroll behavior
  };

  const handleOnChane = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={`flex flex-col `}>
      <label className="text-[#1F2520] text-[14px] mb-2">{label}</label>
      <input
        onChange={handleOnChane}
        onWheel={handleWheel}
        className={`${className} w-full text-[#1F2520] shadow placeholder:text-[#1f25204d] shadow-[#0000000a] focus:ring-0 border-2 font-medium text-[12px] bg-[#ffffff1a] boder-[#1f252033] px-3 py-2 rounded-[10px] outline-none number-input`}
        type={type}
        placeholder={placeholder}
        style={{ WebkitAppearance: "none", MozAppearance: "textfield" }}
      />
    </div>
  );
};

export default Input;
