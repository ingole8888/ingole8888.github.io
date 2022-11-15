import React from 'react'
import { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import {Link} from "react-scroll";

const Navbar = () => {
    const [nav, setNav]=useState(false);
    const links=[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"techstack"
        },
        {
            id:3,
            link:"projects"
        },
        {
            id:4,
            link:"contact"
        },
    ]

    const onButtonClick = () => {
        fetch("Sunil-Ingole-Resume.pdf").then((response) => {
          response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "Sunil-Ingole-Resume.pdf";
            alink.click();
          });
        });
        window.open("https://drive.google.com/file/d/1APXaOFoK6Tdm5IUpBjrmIrpnvVZDgS6m/view?usp=sharing", '_blank');
      };
  return (
    <div className=' flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed '>
        <div>
            <h1 className='text-4xl font-signature ml-3'>Sunil Ingole</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id,link}) =>
            ( <li key={id} 
            className="px-4 cursor-pointer capitalize 
            font-medium text-gray-500 hover:scale-105 
            duration-200">
                  <Link to={link} smooth duration={500}>{link}</Link> 
            </li>
            ))}

            <p onClick={onButtonClick} className="px-4 cursor-pointer capitalize 
            font-medium text-gray-500 hover:scale-105 
            duration-200" download >Resume</p>


        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
        </div>

        {nav && (
             <ul className='flex flex-col justify-center items-center 
             absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black
             to-gray-800 text-gray-500'>
               {links.map(({id,link}) =>( <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl ">
                      <Link to={link} onClick={()=>setNav(!nav)} smooth duration={500}> {link}  </Link>
                 </li>
                 ))}
             </ul>
        )}

       

    </div>
  )
}

export default Navbar