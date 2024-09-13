import { Link, useNavigate } from "react-router-dom";
import img1 from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleform = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoFile = form.photo.files[0];

    // Create FormData to send the image file
    const formData = new FormData();
    formData.append("image", photoFile);

    // Upload image to imgbb
    const imgbbAPI =
      "https://api.imgbb.com/1/upload?key=d240fe72ec969cb050b454dd62652ed9";

    try {
      setLoading(true);
      const res = await fetch(imgbbAPI, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      const photo = data?.data?.url;

      // Create user with email and password
      await createUser(email, password);

      // Update profile with the user's name and photo URL
      await updateUserProfile(name, photo);
      form.reset();
      navigate("/");
      toast.success("User Create Successfully !");
    } catch (error) {
      console.error("Error uploading image or updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-10 p-5">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-10">
          <div className="text-center lg:text-left">
            <img src={img1} />
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleform} className="card-body">
              <h1 className="text-2xl md:text-5xl font-bold mb-2">SignUp!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input type="file" name="photo" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={loading}
                  className="bg-red-600 text-white border rounded-md p-3 text-base font-semibold"
                >
                  {loading ? "Signing up..." : "Sign up"}
                </button>
              </div>
            </form>
            <div>
              <p className="text-lg text-center sm:px-6 text-gray-400">
                Already have an account?
                <Link to={"/login"}>
                  <button className="pl-2 text-blue-700 hover:underline">
                    Login
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
