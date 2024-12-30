// import React from 'react';
// import teen from "../../assets/teen.png";

// const TeenHero = () => {
//   return (
//     <div className="relative text-center text-white font-bold text-2xl md:text-3xl overflow-auto">
//       <img
//         src={teen}
//         alt="Teen Background"
//         style={{
//           width: '100%', // Full width of the container
//           height: 'auto', // Maintain natural aspect ratio
//         }}
//         className="block"
//       />
//       <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-20">
//         <h1 className='text-6xl font-bold '>Teens</h1>
//         <p className=" text-5xl   mt-2">
//         Meet Infonexus teens:empathetic metabolic healthcare‍for  the growing years.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default TeenHero;


import React, { useEffect, useState } from 'react';
import teen from "../../assets/teen.png";
import b1 from "../../assets/b1.png";

const MoreHero = () => {
  const [imageSrc, setImageSrc] = useState(teen);
  const [text, setText] = useState({
    title: 'Teens',
    description: 'Meet Infonexus teens: empathetic metabolic healthcare for the growing years.',
  });

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath.includes('/blogs')) {
      setImageSrc(b1);
      setText({
        title: 'Our Blog',
        description: 'Explore insightful blog posts and stay updated with the latest.',
      });
    } else {
      setImageSrc(teen);
      setText({
        title: 'Teens',
        description: 'Meet Infonexus teens: empathetic metabolic healthcare for the growing years.',
      });
    }
  }, []); // No dependency array means this runs only once on mount

  return (
    <div className="relative text-center text-white font-bold text-2xl md:text-3xl overflow-auto">
      <img
        src={imageSrc}
        alt="Hero Background"
        style={{
          width: '100%', // Full width of the container
          height: 'auto', // Maintain natural aspect ratio
        }}
        className="block"
      />
      {imageSrc === b1 && (
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 mt-20">
        <h1 className="text-6xl font-bold">{text.title}</h1>
        <p className="text-5xl mt-2">{text.description}</p>
      </div>
    </div>
  );
};

export default MoreHero;
