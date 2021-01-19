import React from "react";
import "./selectColor.css";

const SelectColor = ({ setColor, isOpenSelect, setIsOpenSelect }) => {
  const handleClick = (evt) => {
    setColor(evt.target.dataset.value);
  };

  return (
    <div className="selectColor">
      <div
        onClick={() => {
          setIsOpenSelect((previous) => !previous);
        }}
        className={`${!isOpenSelect ? "select" : "select select--active"}`}
      >
        Цвет
        <span data-value="gray" onClick={handleClick}>
          Серый
        </span>
        <span data-value="brown" onClick={handleClick}>
          Бурый
        </span>
        <span data-value="crimson" onClick={handleClick}>
          Малиновый
        </span>
      </div>
    </div>
  );
};

export default SelectColor;
