import axios from "axios";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { RiDoubleQuotesR } from "react-icons/ri";
import Rating from "react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:5000/reviews");
      setReviews(data);
    };
    getData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section className="my-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            What Customer Says
          </h1>
          <p className="p-5 md:w-[70%] mx-auto pb-5 text-gray-700 font-medium text-base">
            We are committed to fostering a collaborative environment where
            creativity thrives, and our collective expertise ensures the highest
            quality in everything we do.
          </p>
          <div className="w-4/5 mx-auto my-5">
            <Slider {...settings}>
              {reviews.map((item, index) => (
                <div key={index}>
                  <div className="p-6 mb-4 rounded-lg border shadow-md h-[50%]">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <img
                          className="w-16 h-16 rounded-full"
                          src={item.image}
                          alt={item.name}
                        />
                        <div className="text-left">
                          <h1 className="text-xl font-semibold mb-1">
                            {item.name}
                          </h1>
                          <p>{item.profession}</p>
                        </div>
                        <RiDoubleQuotesR className="text-4xl text-orange-400 ml-16" />
                      </div>
                    </div>
                    <div className="text-left mt-3">
                      <p className="text-lg text-gray-500">
                        {item.description}
                      </p>
                      <Rating
                        readonly
                        initialRating={item.rating}
                        emptySymbol="fa fa-star-o fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                        className="text-orange-400 text-base my-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
