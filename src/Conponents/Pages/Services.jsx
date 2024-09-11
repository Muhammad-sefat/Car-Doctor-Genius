import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [ascen, setAscen] = useState(true);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/service?sort=${ascen ? "ascen" : "desen"}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [ascen]);
  return (
    <div className="my-8">
      <h2 className="text-2xl md:text-5xl font-bold text-red-600 py-4 text-center">
        Our Service Area
      </h2>
      <p className="p-5 md:w-[60%] mx-auto pb-5 text-gray-700 font-medium text-base">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="text-left ml-5 mb-5">
        <select
          onChange={(e) => setAscen(e.target.value === "low-to-high")}
          className="btn btn-error text-white"
        >
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.map((data) => (
          <SingleService key={data._id} data={data}></SingleService>
        ))}
      </div>

      <p className="border-2 border-red-600 p-3 rounded-md my-8 w-1/6 mx-auto text-red-600 text-xl font-medium">
        More Services
      </p>
    </div>
  );
};

export default Services;
