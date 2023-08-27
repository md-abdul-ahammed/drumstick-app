import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({
  className = "",
  placeholder = "",
  select,
  setSelect,
  label,
  data = [],
}) => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex flex-col `}>
      <label className="text-[#1F2520] text-[14px] mb-2">{label}</label>

      <div
        ref={menuRef}
        onClick={() => setOpen(!open)}
        className={`${className} ${
          !select && "text-[#1f25204d]"
        } w-full relative shadow shadow-[#0000000a] cursor-pointer border-2 font-medium text-[12px] bg-[#ffffff1a] boder-[#1f252033] px-3 py-2 rounded-[10px] outline-none`}
      >
        {select ? select : placeholder}
        <div
          className={`absolute top-[50%] ${
            open ? "z-[12]" : "z-10"
          } right-[10px] translate-y-[-50%]`}
        >
          <FontAwesomeIcon
            className="text-lg text-black cursor-pointer"
            icon={faAngleDown}
          />
        </div>
        {open && data.length > 0 && (
          <div
            className={`absolute ${
              open ? "z-[11]" : "z-[9]"
            } bg-[#f5f5f5] rounded-[10px] top-[-2px] w-[101%] min-h-fit left-[-2px]`}
          >
            <div
              className={`${className} w-full relative shadow placeholder:text-[#1f25204d] shadow-[#0000000a] border-2 font-medium text-[12px] bg-[#ffffff1a] boder-[#1f252033] px-3 py-2 rounded-[10px] outline-none`}
            >
              <div className="flex flex-col text-[12px] px-1 pb-1 space-y-3">
                <div className="pt-3"></div>
                {data.map((selectItem, i) => {
                  return (
                    <div
                      onClick={() => {
                        setSelect(selectItem);
                        setOpen(false);
                      }}
                      key={i}
                      className="cursor-pointer p-1 hover:bg-[#c7c5c5] text-[#333] hover:text-[#000]"
                    >
                      {selectItem}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
