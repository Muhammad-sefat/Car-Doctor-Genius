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
      <h2 className="text-4xl font-bold text-red-600 py-4 text-center">
        Our Service Area
      </h2>
      <p className="p-5 md:w-[60%] mx-auto pb-5">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <button onClick={() => setAscen(!ascen)} className="btn btn-secondary">
        {ascen ? "Price : High to Low" : "Price : Low to High"}
      </button>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.map((data) => (
          <SingleService key={data._id} data={data}></SingleService>
        ))}
      </div>

      <p className="border border-red-600 p-3 rounded-md my-8 w-1/6 mx-auto text-red-600 font-medium">
        More Services
      </p>
    </div>
  );
};

export default Services;
