import { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="my-8">
      <h2 className="text-4xl font-bold text-red-600 py-4 text-center">
        Our Service Area
      </h2>
      <p className="p-5 md:w-[60%] mx-auto pb-5">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {service.map((data) => (
          <SingleService key={data._id} data={data}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
