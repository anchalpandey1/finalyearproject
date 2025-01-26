

import React from 'react';
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";
import b7 from "../../assets/b7.png";
import b8 from "../../assets/b8.png";

const blogData = [
  {
    imgSrc: b2,
    title: "Nutrition Counseling",
    description: "What the FDA approval of Zepbound for obesity could mean for you",
  },
  {
    imgSrc: b3,
    title: "Nutrition Counseling",
    description: "Nutrition with Infonexus: Frozen Meals in a Pinch",
  },
  {
    imgSrc: b4,
    title: "Nutrition Counseling",
    description: "Nutriti Introducing our new Nurse Practitioner Jill Day on with Infonex",
  },
  {
    imgSrc: b5,
    title: "Primary Care Metabolic Health Services",
    description: "What We Believe Primary",
  },
  {
    imgSrc: b6,
    title: "Primary Care Metabolic Health Services",
    description: "Ozempic Face? Stomach Paralysis? Separating Fact from Fiction...",
  },
  {
    imgSrc: b7,
    title: "Nutrition Counseling",
    description: "Introducing our new Clinical Dietitian Ariana Wood",
  },
  {
    imgSrc: b8,
    title: "Nutrition Counseling",
    description: "Eat less and exercise more? With Ozempic, Wegovy, and Mounjaro, it’s about eating enough.",
  },
  {
    imgSrc: b3,
    title: "Nutrition Counseling",
    description: "Wegovy heart health news marks “a day to remember” for obesity treatment",
  }
];

const BlogCards = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
                    {blogData.map((blog, index) => (
                        <div key={index} className="bg-white flex flex-col justify-between leading-normal">
                            <img src={blog.imgSrc} alt={blog.title} />
                            <div className="p-4 pt-2">
                                <div className="mb-8">
                                    <a href="#" className="font-bold text-2xl mb-2 text-[#256BFE] inline-block">{blog.title}</a>
                                    <p className="text-black text-3xl font-semibold text-lato">{blog.description}</p>
                                </div>
                                <div>
                                    <button className="px-8 py-2 bg-[#256BFE] text-white font-semibold rounded hover:bg-blue-600">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button className="px-8 py-4 bg-[#256BFE] text-white rounded-lg font-bold text-3xl" style={{ width: '500px' }}>
                    Load More
                </button>
            </div>
        </div>
    );
}

export default BlogCards;
