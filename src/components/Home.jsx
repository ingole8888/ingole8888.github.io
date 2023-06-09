import React from 'react'
import HeroImage from "../assets/heroimage.jpg";

const Home = () => {

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
  };

  const viewResume = () => {
    window.open("https://drive.google.com/file/d/1APXaOFoK6Tdm5IUpBjrmIrpnvVZDgS6m/view?usp=sharing", '_blank');
  }

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black 
    via-black to-gray-800  '>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center 
       justify-center h-full px-4 md:flex-row '>
        <div className='flex flex-col justify -center h-full mt-80 
           '>

          <h2 className=' text-4xl sm:text-7xl font bold text-white mt-20
           '>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4  '>Enthusiastic Full Stack  Developer. Have a experience of working on diffrent
            integrations like Google calender integration, Microsoft calender and Teams
            integration and Active directory integration. Interested for a position
            Software Developer to enhance my skills and to enhance the user experience.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <button onClick={onButtonClick} className=' group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer 
                '
              rel="noreferrer"
            >Download Resume
            </button>
            <button onClick={viewResume} className=' group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer 
                '>View Resume</button>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my personal profile"
            className='rounded-2xl mx-auto mt-36 w-2/3 md:w-full sm-1/3 mt-50 '
          />
        </div>

      </div>


    </div>
  )
}

export default Home