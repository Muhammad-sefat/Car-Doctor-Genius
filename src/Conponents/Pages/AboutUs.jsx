import img1 from "../../assets/images/about_us/person.jpg";
import img2 from "../../assets/images/about_us/parts.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 my-6">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2 relative">
            <img src={img1} className="max-w-lg rounded-lg shadow-2xl" />
            <img
              src={img2}
              className="max-w-72 border-4 border-gray-500 absolute -bottom-10 -right-0 rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-left md:w-1/2">
            <h1 className="text-xl text-red-600 font-bold">About Us!</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p className="pb-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn bg-red-600 text-white">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
