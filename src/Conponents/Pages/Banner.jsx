import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full h-[90vh]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-md" />

          <div className="absolute flex items-center  top-0 bottom-0 text-left bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-1/2 space-y-5 text-white pl-8">
              <h2 className=" text-5xl font-bold">
                {" "}
                Affordable Price For Car Servicing
              </h2>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
              <div className="space-x-5">
                <button className="btn">Discover More</button>
                <button className="btn bg-red-600 border-0 text-white">
                  Latest Product
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-md" />
          <div className="absolute flex items-center  top-0 bottom-0 text-left bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-1/2 space-y-5 text-white pl-8">
              <h2 className=" text-5xl font-bold">
                {" "}
                Affordable Price For Car Servicing
              </h2>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
              <div className="space-x-5">
                <button className="btn">Discover More</button>
                <button className="btn bg-red-600 border-0 text-white">
                  Latest Product
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-md" />
          <div className="absolute flex items-center  top-0 bottom-0 text-left bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-1/2 space-y-5 text-white pl-8">
              <h2 className=" text-5xl font-bold">
                {" "}
                Affordable Price For Car Servicing
              </h2>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
              <div className="space-x-5">
                <button className="btn">Discover More</button>
                <button className="btn bg-red-600 border-0 text-white">
                  Latest Product
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end  gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-md" />
          <div className="absolute flex items-center  top-0 bottom-0 text-left bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-1/2 space-y-5 text-white pl-8">
              <h2 className=" text-5xl font-bold">
                {" "}
                Affordable Price For Car Servicing
              </h2>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
              <div className="space-x-5">
                <button className="btn">Discover More</button>
                <button className="btn bg-red-600 border-0 text-white">
                  Latest Product
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-md" />
          <div className="absolute flex items-center  top-0 bottom-0 text-left bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-1/2 space-y-5 text-white pl-8">
              <h2 className=" text-5xl font-bold">
                {" "}
                Affordable Price For Car Servicing
              </h2>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
              <div className="space-x-5">
                <button className="btn">Discover More</button>
                <button className="btn bg-red-600 border-0 text-white">
                  Latest Product
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-md" />
          <div className="absolute flex items-center  top-0 bottom-0 text-left bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="w-1/2 space-y-5 text-white pl-8">
              <h2 className=" text-5xl font-bold">
                {" "}
                Affordable Price For Car Servicing
              </h2>
              <p>
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly
                believable.{" "}
              </p>
              <div className="space-x-5">
                <button className="btn">Discover More</button>
                <button className="btn bg-red-600 border-0 text-white">
                  Latest Product
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 right-5 bottom-5">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
