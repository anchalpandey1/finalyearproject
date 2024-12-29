import React from 'react'
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import h5 from "../../assets/h5.png";
const Cards = () => {
  return (
    <div>
          <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between mt-12">
          {/* Left Section */}
          <div className="w-full md:w-1/3 md:ml-40">
            <h2 className="text-4xl font-bold font-inter text-black">WEIGHT BIAS IN THE USA</h2>
            <p className="mt-4 font-medium text-3xl text-black">
              Nearly 70% of America is overweight or affected by obesity; why should we all experience subpar care? </p>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-around mt-8 md:mt-0">
            {/* Card 1 */}
            <div className="relative bg-cover bg-center rounded-lg w-full md:w-5/12 mb-6 lg:w-[300px] lg:h-[400px]" style={{ backgroundImage: `url(${h1})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  className="w-5 h-5"
                >
                  <path
                    style={{ fill: "#232326" }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center  z-10">
                <h3 className="text-xl font-semibold text-white pl-4">
                  55%<br />
                  Anxiety<br />
                  Percentage who have <br />cancelled an<br /> appointment due to <br />anxiety about being <br />weighed.
                </h3>
              </div>
            </div>

            <div className="relative bg-cover bg-center rounded-lg w-full md:w-5/12 mb-6 lg:w-[300px] lg:h-[400px]" style={{ backgroundImage: `url(${h2})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25"
                  className="w-5 h-5"
                >
                  <path
                    style={{ fill: "#232326" }}
                    d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                    data-name="Right"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex items-center  z-10">
                <h3 className="text-xl font-semibold text-white pl-4">
                  69%<br />
                  Stigma<br />
                  Percentage who have<br /> cancelled an <br />appointment due to <br />anxiety about being<br /> weighed.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-12 space-x-6">
          {/* Card 3 */}
          <div
            className="relative bg-cover bg-center rounded-lg w-full md:w-5/12 lg:w-[300px] lg:h-[400px]"
            style={{ backgroundImage: `url(${h3})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-5 h-5">
                <path
                  style={{ fill: "#232326" }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center z-10">
              <h3 className="text-xl font-semibold text-white pl-4">67%
                Explicit Bias<br />
                Percentage of medical<br /> students exhibiting <br />explicit weight bias.</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative bg-cover bg-center rounded-lg w-full md:w-5/12 lg:w-[300px] lg:h-[400px]"
            style={{ backgroundImage: `url(${h4})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-5 h-5">
                <path
                  style={{ fill: "#232326" }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center z-10">
              <h3 className="text-xl font-semibold text-white pl-4">52%<br />
                Barriers<br />
                Percentage of women<br /> who report their weight<br /> being a barrier to<br /> receiving appropriate <br />healthcare.</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="relative bg-cover bg-center rounded-lg w-full md:w-5/12 lg:w-[300px] lg:h-[400px]"
            style={{ backgroundImage: `url(${h5})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-5 h-5">
                <path
                  style={{ fill: "#232326" }}
                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                  data-name="Right"
                />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center z-10">
              <h3 className="text-xl font-semibold text-white pl-4">
                69%<br />
                Stigma<br />
                Percentage who have<br /> cancelled an <br />appointment due to <br />anxiety about being<br /> weighed.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards