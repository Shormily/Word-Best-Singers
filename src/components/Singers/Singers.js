import React from "react";
import "./Singer.css";
const Singers = (props) => {
  //   console.log(props.singer);
  const { name, Age, Birthday, First_Song, img, Net_Worth, Height } =
    props.singer;
  return (
    <div>
      <div className="col h-100">
        <div className="card h-100 cart">
          <img src={img} className="card-img-top profile" alt="..." />
          <div className="card-body">
            <h3>{name}</h3>
            <p>Age: {Age}</p>
            <p>Birthday: {Birthday}</p>
            <p>First-Song: {First_Song}</p>
            <p>Net-Worth: {Net_Worth}</p>
            <p>Height: {Height}</p>
            <div className="card-footer bg-white border-0">
              <button
                onClick={() => props.handleCart(props.singer)}
                type="button"
                className="btn btn-dark"
              >
                <span>
                  <i className="fas fa-shopping-cart"></i>
                </span>{" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singers;
