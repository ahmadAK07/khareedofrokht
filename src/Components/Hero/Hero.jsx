import React, { useEffect, useState } from 'react';
import "./Hero.css";

const Hero = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const imgList = [
    "./slider (1).jpg",
    "./slider (2).jpg",
    "./slider (3).jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg(prevImg => (prevImg < imgList.length - 1 ? prevImg + 1 : 0));
    }, 3000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [imgList.length]);

  return (
    <div className='hero' style={{backgroundImage: `linear-gradient(180deg, rgba(255, 69, 0, 0.1), rgba(255, 69, 0, 0.2)),url('${imgList[currentImg]}')`}}>
    </div>
  );
}

export default Hero;
