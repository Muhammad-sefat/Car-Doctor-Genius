import { FaArrowRightLong } from "react-icons/fa6";

const SingleService = ({ data }) => {
  const { img, title, price } = data;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Image" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title font-bold">{title}</h2>
          <div className="flex justify-between items-center">
            <p className="text-red-600 py-4 text-lg font-medium">
              Price : {price}
            </p>
            <span className="text-red-600 text-lg">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
