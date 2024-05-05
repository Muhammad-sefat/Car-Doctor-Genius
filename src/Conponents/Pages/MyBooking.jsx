import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import axios from "axios";

const MyBooking = () => {
  const [booking, setBooking] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking/${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBooking(res.data);
      });
  }, [user]);
  return (
    <div className="my-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((order) => (
              <tr key={order._id}>
                <th>
                  <p className="text-xl">X</p>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.newBooking.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order?.newBooking.name}</div>
                      <div className="text-sm opacity-50">
                        {order?.newBooking.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td>$ {order?.newBooking.price}</td>
                <td>{order?.newBooking.date}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">pending</button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
