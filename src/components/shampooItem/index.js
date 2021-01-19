import React, { useState } from "react";
import SelectColor from "../selectColor";
import SelectCapacity from "../selectCapacity";
import "./shampooItem.css";

const ShampooItem = ({ image }) => {
  const INITIAL_COST = 200;
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [color, setColor] = useState(null);
  const [capacity, setCapacity] = useState("1");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(INITIAL_COST);

  const onLeaveMouse = () => {
    setIsOpenSelect(false);
  };

  const addItem = (evt) => {
    setQuantity((previous) => previous + 1);
    evt.preventDefault();
  };

  const deleteItem = (evt) => {
    setQuantity((previous) => previous - 1);
    evt.preventDefault();
  };

  return (
    <li onMouseLeave={onLeaveMouse} className="shampooItem">
      <span className="label">New</span>
      <span className="icon"></span>
      <div className="image">
        <img src={image} alt={`Изображение товара`} width="250" height="250" />
      </div>
      <h2>Шампунь</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
      <form>
        <SelectColor
          setColor={setColor}
          isOpenSelect={isOpenSelect}
          setIsOpenSelect={setIsOpenSelect}
        />
        <span className="price">{price * quantity} грн</span>
        <SelectCapacity
          capacity={capacity}
          setCapacity={setCapacity}
          setPrice={setPrice}
        />
        <div className="quantity">
          <button disabled={quantity === 1} onClick={deleteItem}>
            -
          </button>
          <output>{quantity}</output>
          <button onClick={addItem}>+</button>
        </div>
        <button type="submit">Купить</button>
      </form>
    </li>
  );
};

export default ShampooItem;
