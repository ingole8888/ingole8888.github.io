import React from 'react'
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import github from "../assets/github.png";
import node from "../assets/node.png"
import sql from "../assets/SQL.png"

const WorkingExp = () => {
    const techs = [
       
        {
          id: 1,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 2,
          src:nextjs,
          title: " Express",
          style: "shadow-white",
        },
        
        {
          id: 3,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
            id: 4,
            src: node,
            title: "Node",
            style: "shadow-blue-600",
          },
          {
            id: 5,
            src: sql,
            title: "SQL",
            style: "shadow-white",
          },
      ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-gray-800 w-full
       h-full "
    >
       {/* h-[60rem] */}
      <div className="max-w-screen-lg mx-auto  p-4 flex 
      flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4
           border-gray-500 p-2 mt-60 md">
            Experience
          </p>
          <p className="py-6">Have a experience of working on diffrent
            integrations like Google calender integration, Microsoft calender and Teams
            integration and Active directory integration. In the calender integration I booked 
            participant and organizer calender according to their avalaibity. Also change meeting time and 
            cancel meeting. In Active directory integration I create a user in active directory 
            when user is created in the HRMS website database and also add functionality to modify user 
            data and delete user.</p>
          <p className="py-6">These are the technologies I've worked with in IT</p>
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
        </div>
    </div>
  )
}

export default WorkingExp