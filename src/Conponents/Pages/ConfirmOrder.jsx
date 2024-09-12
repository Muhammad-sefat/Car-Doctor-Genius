import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import logo from "../../assets/images/checkout/checkout.png";
import axios from "axios";
import CommonSlide from "../CommonSlide";

const ConfirmOrder = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleBookingOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const photo = form.photo.value;
    const newBooking = { name, email, price, date, photo };

    axios.post("http://localhost:5000/booking", { newBooking }).then((res) => {
      if (res.data.insertedId) {
        alert("Order Successfull");
      }
    });
  };
  return (
    <div>
      <CommonSlide logo={logo} font={"Check Out"} text={"Home/Checkout"} />
      <section className="p-6 dark:text-gray-800">
        <form
          onSubmit={handleBookingOrder}
          noValidate=""
          className="container w-full text-left max-w-4xl p-8 mx-auto space-y-4 rounded-md shadow bg-gray-200"
        >
          <h2 className="w-full text-4xl font-bold leading-tight">
            Confirm Order
          </h2>
          <div className="flex items-start gap-5 w-full">
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 ml-1 text-base font-semibold"
                >
                  Service Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 ml-1 text-base font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block mb-1 ml-1 text-base font-semibold"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="price"
                  name="price"
                  required
                  className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block mb-1 ml-1 text-base font-semibold"
                >
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="" className="block text-base font-semibold">
              Photo URL
            </label>
            <br />
            <input
              className="border w-full p-3 rounded-md"
              type="text"
              id="text"
              name="photo"
              placeholder="photo url"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow bg-red-500 text-white"
            >
              Confirm
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ConfirmOrder;
