import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";

const ConfirmOrder = () => {
  const { user } = useContext(AuthContext);

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
      console.log(res.data);
    });
  };
  return (
    <div>
      <section className="p-6 dark:text-gray-800">
        <form
          onSubmit={handleBookingOrder}
          noValidate=""
          className="container w-full text-left max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50"
        >
          <h2 className="w-full text-3xl font-bold leading-tight">
            Confirm Order
          </h2>
          <div className="flex justify-between items-center gap-5">
            <div>
              <div>
                <label htmlFor="name" className="block mb-1 ml-1">
                  Service Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required=""
                  className="block w-full p-2 border rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 ml-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder={user?.email}
                  required=""
                  className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="number" className="block mb-1 ml-1">
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="price"
                  name="price"
                  required=""
                  className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                />
              </div>

              <div>
                <label htmlFor="date" className="block mb-1 ml-1">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="block w-full border p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"
                ></input>
              </div>
            </div>
          </div>
          <label htmlFor="" className="">
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
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
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
