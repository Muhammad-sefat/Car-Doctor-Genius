import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const { img, price, title, description } = useLoaderData();
  console.log(img, price);
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">{description}</p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                {price}
              </a>
              <Link to={"/confirmOrder"}>
                {" "}
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg bg-red-500 text-white font-semibold border rounded dark:border-gray-800"
                >
                  Process Order
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
