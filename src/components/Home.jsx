import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroimage.jpg";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black 
    via-black to-gray-800  '>
       
       <div className='max-w-screen-lg mx-auto flex flex-col items-center 
       justify-center h-full px-4 md:flex-row '>
          <div className='flex flex-col justify -center h-full h-[14rem] sm h-[10rem]
           '>
            
           <h2 className=' text-4xl sm:text-7xl font bold text-white mt-20
           '>I'm a Full Stack Developer</h2>
           <p className='text-gray-500 py-4  '>Enthusiastic Full Stack  Developer. Work on various projects in a Masai School
           during last week of a every unit using React-JS, Bootstrap, Chakra-UI and   
             CSS for frontend and Node.js, Express and MongoDB for backend. Interested for a position
           Software Developer to enhance my skills and to enhance the user experience.</p>
           <div href="https://drive.google.com/file/d/1APXaOFoK6Tdm5IUpBjrmIrpnvVZDgS6m/view?usp=sharing">
                <button className=' group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer 
                '>Resume
                   <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight size={25}/>
                    </span>
                </button>
                
           </div>    
          </div>
           <div>
            <img
            src={HeroImage} 
            alt="my personal profile"
            className='rounded-2xl mx-auto mt-36 w-2/3 md:w-full sm-1/3 mt-60 '
            />
           </div>

        </div>
      

    </div>
  )
}

export default Home