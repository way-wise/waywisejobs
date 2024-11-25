import React from 'react'

const List = ({ title }) => {
  return (
    <>
      <li className="flex items-center gap-2">
        <i className="bi bi-check-circle-fill" style={{ color: "#2A37EA" }}></i>
        <p className="font-medium font-rubik text-[16px] text-[#2A37EA]">
            {title}
        </p>
      </li>
    </>
  );
};

export default List;
