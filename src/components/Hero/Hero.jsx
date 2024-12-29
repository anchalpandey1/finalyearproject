import React from 'react';
import hero from "../../assets/hero.png";

import Cards from '../CardHero/Cards';

const Hero = () => {
  return (
    <div>
      <section className="px-3 py-5  lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div>
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center ml-6">
              <p className="text-4xl font-bold md:text-7xl">Comprehensive, <br />
                <span className='text-[#256BFE]'>empathetic </span>
                healthcare–<span className='text-[#3BCBB9]'>at any</span><br />
                size.</p>
              <p className="mt-2 text-sm md:text-lg">We’re changing the shape of health care to fit all bodies. Uncompromising primary care and obesity medicine that is refreshingly free of bias, blame, and shame</p>

            </div>
            <div className='ml-5'>
              <button className="text-lg md:text-2xl bg-[#256BFE] text-white py-2 px-5 mt-10 hover:bg-zinc-800">
                Become a patient
              </button>
              <a href="" className='ml-5 text-lg md:text-2xl text-[#256BFE] font-bold underline' >Learn More</a>
            </div>

          </div>

          <div className="order-1 lg:order-2">
            <img
              className="h-80 w-80 rounded-l-[10%] object-cover lg:w-[600px] lg:h-[600px]"
              src={hero}
              alt="Summer Sale"
            />
          </div>
        </div>
        <div className="justify-center mx-6 mt-20">
          <p className="text-4xl font-bold md:text-5xl font-inter  max-w-7xl mx-auto leading-tight">
            Welcome to patient-centered expert-led care where you and your whole body are treated compassionately
          </p>
          <p className="mt-2 text-sm md:text-lg font-inter leading-normal max-w-3xl mx-auto">
            We customize your integrative care plan to help you reach your wellness goals. And if you choose to focus on obesity medicine and metabolic health, we can do that, too.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#256BFE] text-white py-3 px-8 rounded-lg text-xl font-inter font-bold hover:bg-[#256BFE]">
            Read More
          </button>
        </div>

      </section>
    <Cards/>
    </div>


  );
};

export default Hero;
