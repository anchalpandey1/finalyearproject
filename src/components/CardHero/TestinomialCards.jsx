import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import Font Awesome icons

const testimonials = [
  {
    name: "Saif bhai jan",
    role: "Business Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    text: "For patients with chronic illnesses, they might work with a chronic care manager who coordinates their care across different specialists and helps them manage their condition on a daily basis.",
  },
  {
    name: "Priyanka giri",
    role: "Business Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    text: "For patients with chronic illnesses, they might work with a chronic care manager who coordinates their care across different specialists and helps them manage their condition on a daily basis.",
  },
  {
    name: "Priyanka giri",
    role: "Business Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    text: "For patients with chronic illnesses, they might work with a chronic care manager who coordinates their care across different specialists and helps them manage their condition on a daily basis.",
  },
  {
    name: "John Doe",
    role: "Product Manager",
    image: "https://via.placeholder.com/150", // Replace with actual image URL
    text: "Chronic care managers make life easier for patients by managing appointments and coordinating healthcare services.",
  },
];

const TestimonialCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Calculate progress width
  const progressWidth = ((currentIndex + 1) / testimonials.length) * 100;

  return (
    <div className="flex flex-col items-center mt-10  p-6">
      {/* Centered Heading */}
      <h2 className="text-xl font-semibold text-black mb-4 text-center">
      TESTIMONIALS
      </h2>
      <h1 className="text-5xl font-bold text-black mb-8 text-center">
      Our Patients Says
      </h1>
     

      {/* Slider Container */}
      <div className="overflow-hidden w-full max-w-6xl h-[400px]">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/3 bg-white  shadow-lg shadow-gray-400 rounded-lg p-6 mx-3"
            >
              <div className="text-8xl text-green-500 font-bold ">“</div>
              <p className="text-black text-lg mb-6 italic">
                {testimonial.text}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-gray-800 font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-col items-center mt-6 space-y-4 w-full max-w-lg">
        {/* Navigation Icons */}
        <div className="flex justify-between items-center w-full">
          <button
            onClick={handlePrevious}
            className="p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          >
            <FaArrowLeft size={20} />
          </button>

          {/* Progress Line */}
          <div className="w-full h-1 bg-gray-300 mx-4 relative">
            <div
              className="absolute h-1 bg-blue-500"
              style={{ width: `${progressWidth}%` }}
            ></div>
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-gray-200 rounded-full shadow hover:bg-gray-300"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
