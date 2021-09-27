import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { newSinger } = props;
  const total = newSinger.reduce(
    (previous, currenet) => previous + currenet.Net_Worth,
    0
  );
  return (
    <div className="text">
      <h2>Order Summary</h2>
      <h4>Total: {newSinger.length}</h4>
      <h4>Net Worth: {total} Millon</h4>
      <ul>
        {newSinger.map((singer) => (
          <li key={singer.id}>{singer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
