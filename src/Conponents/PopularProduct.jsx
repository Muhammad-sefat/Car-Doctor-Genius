import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "./Pages/SingleProduct";

const PopularProduct = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:5000/products");
      setDatas(data);
    };
    return getData;
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-5xl font-bold my-2 text-center">
        Browse Our Products
      </h1>
      <p className="p-5 md:w-[60%] mx-auto text-gray-700 font-medium">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        {datas.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </div>
      <p className="hover:scale-110  hover:transition-transform hover:duration-300 border-2 border-red-600 p-3 rounded-md my-8 w-1/6 mx-auto text-red-600 text-xl font-medium">
        More product
      </p>
    </div>
  );
};

export default PopularProduct;
