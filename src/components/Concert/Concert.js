import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Singers from "../Singers/Singers";
import "./Concert.css";

const Concert = () => {
  const [singers, setSingers] = useState([]);

  useEffect(() => {
    fetch("./Tools.JSON")
      .then((res) => res.json())
      .then((data) => setSingers(data));
  }, []);

  const [newSinger, setNewSinger] = useState([]);
  const handleCart = (singer) => {
    const newCArt = [...newSinger, singer];
    setNewSinger(newCArt);
  };
  return (
    <div className="concert-container py-5">
      <div className="shop-contianer row row-cols-1 row-cols-md-3 g-4 px-5">
        {singers.map((singer) => (
          <Singers
            key={singer.id}
            singer={singer}
            handleCart={handleCart}
          ></Singers>
        ))}
      </div>
      <div className="cart-container">
        <Cart newSinger={newSinger}></Cart>
      </div>
    </div>
  );
};

export default Concert;
