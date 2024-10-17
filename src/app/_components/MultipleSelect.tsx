import React, { useState } from "react";

import { colors } from '@/app/_constants';
function Dropdown({
  options,
  addTag,
  removeTag,
  selectedItems,
}: {
  options: string[] | number[];
  addTag: (item: string | number) => void;
  removeTag: (item: string | number) => void;
  selectedItems: (string | number)[];
}) {
  return (
    <div className="flex flex-col w-full">
      {options.map((item: string | number, key: React.Key) => {
        return (
          <div
            key={key}
            className="cursor-pointer w-full border-gray-100 rounded-t border-b"
            onClick={() => {
              if (selectedItems.includes(item)) {
                removeTag(item);
              } else {
                addTag(item);
              }
            }}
          >
            <div className={`flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative ${colors.border.blueHover}`}>
              <div className="mx-2 leading-6 flex items-center">
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  className="mr-2"

                />
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6 ">{item}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const Multiselect = ({
  options
  } : {
    options: string[] | number[]
  }) => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false);
  // managing dropdown items (list of dropdown items)
  // const [items] = useState(['Hospital', 'Medical Clinic', 'School', 'University', 'Office Building', 'Etc']);
  // contains selected items
  const [selectedItems, setSelected] = useState<(string | number)[]>([]);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  // adds new item to multiselect
  const addTag = (item: string | number) => {
    setSelected(selectedItems.concat(item));
  };
  // removes item from multiselect
  const removeTag = (item: string | number) => {
    const filtered = selectedItems.filter((e) => e !== item);
    setSelected(filtered);
  };

  return (
    <div className="autcomplete-wrapper">
      <div className="autcomplete">
        <div className="w-full flex flex-col items-center mx-auto">
          <div className="w-full relative">
            <div className="flex flex-col items-center relative">
              <div className="w-full ">
                <div className="p-1 flex !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white rounded ">
                  <div className="flex flex-auto flex-wrap">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            `flex justify-center items-center m-1 font-medium py-1 px-2
                            rounded-full text-white ${colors.button.blueAndHover}`}
                        >
                          <div className="text-xs font-normal leading-none max-w-full flex-initial">
                            {tag}
                          </div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div onClick={() => removeTag(tag)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="flex-1">
                      <input
                        placeholder="Facility Type.."
                        className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                        onFocus={() => setDropdown(true)}
                      />
                    </div>
                  </div>
                  <div
                    className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
                    onClick={toggleDropdown}
                  >
                    <button
                      className={`
                        cursor-pointer w-6 h-6 text-gray-600 outline-none
                        focus:outline-none transform transition duration-300
                        ${dropdown ? 'rotate-180' : 'rotate-0'}
                      `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up w-4 h-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? (
              <>
                <div
                  id="dropdown"
                  className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto "
                >
                  <Dropdown options={options} addTag={addTag} removeTag={removeTag} selectedItems={selectedItems}></Dropdown>
                </div>
                <div className="fixed w-full h-full z-30 inset top-0 left-0" onClick={() => setDropdown(false)}></div>
              </>
            ) : null}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiselect;
