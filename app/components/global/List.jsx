import React from 'react'

const List = ({ title }) => {
  return (
    <>
      <li className="flex items-center gap-2">
        <i className="bi bi-check-circle-fill" style={{ color: "#FF902E" }}></i>
        <p className="font-medium font-rubik text-[16px] text-black">
          {title}
        </p>
      </li>
    </>
  );
};

export default List;
