import img1 from "../../assets/icons/check.svg";
import img2 from "../../assets/icons/deliveryt.svg";
import img4 from "../../assets/icons/Wrench.svg";
import img5 from "../../assets/icons/person.svg";
import img6 from "../../assets/icons/group.svg";
const Features = () => {
  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Why Choose Us</h2>
          <p className="dark:text-gray-600 p-5 md:w-[70%] mx-auto  text-gray-700 font-medium py-5">
            The majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-3 md:grid-cols-6">
          <div className="flex flex-col items-center p-4 border rounded hover:bg-red-500 hover:text-white">
            <img src={img1} />
            <h3 className="my-3 text-xl font-semibold">100% Guranty</h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded hover:bg-red-500 hover:text-white">
            <img src={img2} />
            <h3 className="my-3 text-xl font-semibold">Timely Delivery</h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded hover:bg-red-500 hover:text-white">
            <img src={img1} />
            <h3 className="my-3 text-xl font-semibold">Timely Support</h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded hover:bg-red-500 hover:text-white">
            <img src={img4} />
            <h3 className="my-3 text-xl font-semibold">Best Equipment</h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded hover:bg-red-500 hover:text-white">
            <img src={img5} />
            <h3 className="my-3 text-xl font-semibold">24/7 Support</h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded hover:bg-red-500 hover:text-white">
            <img src={img6} />
            <h3 className="my-3 text-xl font-semibold">Expert Team</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
