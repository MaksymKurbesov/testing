import React from "react";

const SelectCapacity = ({ capacity, setCapacity, setPrice }) => {
  const INITIAL_COST = 200;
  const handleChange = (evt) => {
    setCapacity(evt.target.value);
    setPrice(INITIAL_COST * +evt.target.value);
  };

  return (
    <>
      <input
        checked={capacity === "1"}
        onChange={handleChange}
        id="small"
        type="radio"
        name="capacity"
        value="1"
      />
      <label htmlFor="small">100 мл</label>
      <input
        checked={capacity === "1.7"}
        onChange={handleChange}
        id="medium"
        type="radio"
        name="capacity"
        value="1.7"
      />
      <label htmlFor="medium">200 мл</label>
      <input
        checked={capacity === "2"}
        onChange={handleChange}
        id="large"
        type="radio"
        name="capacity"
        value="2"
      />
      <label htmlFor="large">300 мл</label>
    </>
  );
};

export default SelectCapacity;
