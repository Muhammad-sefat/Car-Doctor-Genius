import React from "react";
import Rating from "react-rating";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="card shadow-xl border p-5 rounded-md h-full">
        <figure>
          <img
            className="hover:scale-110  hover:transition-transform hover:duration-300  rounded-md md:w-[80%] bg-base-200 p-5 px-16"
            src={product.image}
            alt="Image"
          />
        </figure>
        <div className="card-body">
          <Rating
            readonly
            initialRating={product.rating}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
            className="text-yellow-400 text-base"
          />
          <h2 className="text-center text-xl font-bold">{product.name}</h2>
          <p className="text-lg font-bold text-red-500">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
