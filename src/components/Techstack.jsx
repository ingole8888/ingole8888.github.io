import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      title: " Express",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: graphql,
      title: "Mongodb",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
        id: 9,
        src: node,
        title: "Node",
        style: "shadow-gray-400",
      },
  ];

  return (
    <div
      name="techstack"
      className="bg-gradient-to-b from-gray-800 to-black w-full
       h-full "
    >
       {/* h-[60rem] */}
      <div className="max-w-screen-lg mx-auto  p-4 flex 
      flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4
           border-gray-500 p-2 mt-60 md">
            Tech Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
          </div>
         <div className=" justify-center text-center mt-40">
         <div><h2 className="text-4xl font-bold  p-2 inline">Skills</h2></div>
          <div className="text-2xl h-[10rem]">
          <p>Frontend Developer</p>
          <p>Full Stack Developer</p>
          <p>Team Management</p>
          <p>Time Management</p>
          </div>
         </div>
        </div>
      
      
    </div>
  );
};

export default Experience;