import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      h1:"bathandbodyworks.com",
      p:"It's a home of bodycare products.(Personal project)",
      href:"https://bathandbodyworks-com.vercel.app/",
      href1:"https://github.com/ingole8888/colossal-dog-2458"
      
    },
    {
      id: 2,
      src: reactParallax,
      h1:"1mg.com",
      p:"It provide home delivery of all type medicine. (Personal project)",
      href:"https://dashing-speculoos-367b00.netlify.app/",
      href1:"https://github.com/ingole8888/cloneof1mg"
    },
    {
      id: 3,
      src: navbar,
      h1:"shop.com",
      p:"American shopping website.(team project)",
      href:"https://shop-com-clone-web17.netlify.app/",
      href1:"https://github.com/mistrivishal/SHOP.COM-clone"
    },
    {
      id: 4,
      src: reactSmooth,
      h1:"realme.com",
      p:"Popular mobile shopping website.(team project)",
      href:"https://elegant-crisp-f2194d.netlify.app/",
      href1:"https://github.com/prashant1307/redmi_clone"
    },
    {
      id: 5,
      src: installNode,
      h1:"carbmanager.com",
      p:"Provides healthy diet plan to people.(Personal project)",
      href:"https://fascinating-blini-865605.netlify.app/",
      href1:"https://github.com/ingole8888/aquatic-slope-5169"
    },
    {
      id: 6,
      src: reactWeather,
      h1:"youtube clone",
      p:"Added search and watch full length video. (Personal project)",
      href:"https://exquisite-queijadas-78d64e.netlify.app/",
      href1:"https://github.com/ingole8888/practice11/tree/master/ES6"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full 
      md:h-full text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full ">
        {/* h-[80rem] */}
        <div className="pb-8 mt-30">
          <p className="text-4xl font-bold inline 
          border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center">
          {portfolios.map(( link ) => (
            <div key={link.id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={link.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h1 className=" text-2xl items-center justify-center m-4">{link.h1}</h1>
              <p className="items-center justify-center m-4">{link.p}</p>
              <div className="flex items-center justify-center">
                <a href={link.href}>
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </a>
                <a href={link.href1}><button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                 </button>
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;