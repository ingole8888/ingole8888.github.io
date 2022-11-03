import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.png";
import installNode from "../assets/portfolio/installNode.png";
import navbar from "../assets/portfolio/navbar.png";
import reactParallax from "../assets/portfolio/reactParallax.png";
import reactSmooth from "../assets/portfolio/reactSmooth.png";
import reactWeather from "../assets/portfolio/reactWeather.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      h1:"bathandbodyworks.com",
      p:"It's a home of bodycare products.(Personal project)",
      techstack:"ReactJs, Bootstrap",
      netlify:"https://bathandbodyworks-com.vercel.app/",
      github:"https://github.com/ingole8888/colossal-dog-2458"
      
    },
    {
      id: 2,
      src: reactParallax,
      h1:"1mg.com",
      p:"It provide home delivery of all type medicine. (Personal project)",
      techstack:"HTML, CSS and JS",
      netlify:"https://dashing-speculoos-367b00.netlify.app/",
      github:"https://github.com/ingole8888/cloneof1mg"
    },
    {
      id: 3,
      src: navbar,
      h1:"shop.com",
      p:"American shopping website.(team project)",
      techstack:"HTML, CSS and JS",
      netlify:"https://shop-com-clone-web17.netlify.app/",
      github:"https://github.com/mistrivishal/SHOP.COM-clone"
    },
    {
      id: 4,
      src: reactSmooth,
      h1:"realme.com",
      p:"Popular mobile shopping website.(team project)",
      techstack:"HTML, CSS and JS",
      netlify:"https://elegant-crisp-f2194d.netlify.app/",
      github:"https://github.com/prashant1307/redmi_clone"
    },
    {
      id: 5,
      src: installNode,
      h1:"carbmanager.com",
      p:"Provides healthy diet plan to people.(Personal project)",
      techstack:"ReactJs, Bootstrap",
      netlify:"https://fascinating-blini-865605.netlify.app/",
      github:"https://github.com/ingole8888/aquatic-slope-5169"
    },
    {
      id: 6,
      src: reactWeather,
      h1:"youtube clone",
      p:"Added search and watch full length video. (Personal project)",
      techstack:"HTML, CSS and JS",
      netlify:"https://exquisite-queijadas-78d64e.netlify.app/",
      github:"https://github.com/ingole8888/practice11/tree/master/ES6"
    },
  ];

  return (
    <div
      name="projects"
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-4 justify-center">
          {portfolios.map((link ) => (
            <div key={link.id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={link.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <h1 className=" text-2xl items-center justify-center m-4">{link.h1}</h1>
              <p className="items-center justify-center m-4">{link.p}</p>
              <p className="items-center justify-center m-4">{link.techstack}</p>
              <div className="flex items-center justify-center">
                
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md" onClick={()=>window.open(link.netlify,'_blank')}>
                  Demo
                </button>
                
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-md" onClick={()=>window.open(link.github,'_blank')}>
                  GitHub
                 </button>
               
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;