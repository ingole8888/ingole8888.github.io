import React from "react";

import tailwind from "../assets/tailwind.png";

const Tools = () => {
  const techs = [
    {
      id: 1,
      src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAABAAIFAwQGB//EADAQAAEEAgEDAgMGBwAAAAAAAAEAAgMRBAUSBiExE2EVQVEHFCJCgbEjJDJicZGh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgQF/8QAJhEBAAICAQMDBAMAAAAAAAAAAAECAxESEyExBEFRFCJhsTKBkf/aAAwDAQACEQMRAD8A8KvuPjKkDSJtUhs0iSqUQ0gqQICJtIEBBUibYUq72qUNmkRUgUTapA0ggETZpEPFDZpDapEcdI7NIbVImyAhtUibNIbNIm1SgqQ2aRFSGzSJthSrvapDZpRFSBRFSGzSG1SJs0ibVIbKCpEYUjRvekemcrqbYehA70seOjPOfyD6AfMlZZcsY421w4Zy21DDqXp6fR5IILpsCVzhjZXGhIB+x/cdx2TFli8flM2Kcc/hpqWrHZpDapEIaSQALJ8AIjv6rT5212A1+HDeSWl3CQ8KAFnyuLZK1jctKY7Xtxjy4vh2YNaNkYHfczL6XrWK5+a82rzrvj7pNLceWuzu5PTmyxNPHtcmJkWNLxLA6Qc3A+CG+aXMZazbjDq2G9ac58NVS72xNIO5oNaza7bHwpp/QjkP4nhjnuodyGgA2VzkvwrtvirF7RWZfUYxpHYEXTWM1vrxEhzsQH1eHY82uHcOfYBsirdfYd/BPPfUl9OOnrpQ7Ww0+dtJW6+dkTsGPGP8vkOaZmhxAFOA4gjgaPfx579ua3ivePLq+O1/tnw+TdQ6s6bbT4PJzhHRHOuQB7gOokX/AIK+jjvzrt8jNTp3mr1sms6Z18/T+PlanIyZdpjQOe4ZT2tjc+gXAA2TZ8eK8LzRfJaLTE+Hstjw0mtZjexrujcb4zvhLBkZuLrHhkOLE/i+dzhYBd8qFWVbZ5419tpT0sc7b7xDmytFgaqTSbeTS5GI2bMbjy4EuS48JLtj2v8AJHYmvn7LmMlrRau/7W2KtJrfjrc+G3x5MZ/2uTMgxTFMyJ4nlMhd6x9NlGvy0O3ZcTE9DvLSJj6qdR7S8fFhYcfQsWzyIZZnN2nB8Xrvax7ONkVdA/3Va33bq8Y+Hl41jBzn5ej6sfpJ+o9Di7HXEskghDpfvLxwjdyAbQrw4g8vZZYucUtNZb+onHOSlbQ00/TeHrMTqfI2UbnjClGPgjm4fjd3aTXmmuYe/utIyzaaxHv5YWwVpW829vDyFL0vCwY50b2vY5zHNNtc00QfqCk6lpvT6P0VuMHZxfdsnGgO5YS4F7G1msruzxQdQ/2OXf8AEvFmx2r3jx+n0vTZq37T/L9nqrqPC1OXl/AzJHnzMjYHMkcGwtAJstuuVvI4kdqN+7Fim8Ry8HqM9cczw8vnMhfK975Hue95Jc5xsuJ+ZK9sdvD5czvy9Fs9/j5mf0/kRwzNbrIYI5Q6reY3Anj39vmsKYprFo+Xqyeora1JiPDvDq7FfuN0/Jxch+r2paXxscGyxloADgbq/wBfouejPGvzDv6uvO24+2f9avY5+qY/C+Dw57zjzCV82dPbpKIIHEdgO3nyu60t35a7sb5aduG+3y3g6r08PWLeoYMbP/ixOGRE7h2dxa0ce/ih3srPpX6fCW/1OKM3UjbRO28Lujfgnpyev99OR6nbhx41Xm7/AEWkUnqc3nnPWcPT133ty9TbRvUWwwzgY2R6keKzHDONuc5t/wBIbf1THTp1na58vWvHCPw3n2i7SeTA1GtyWCLLMDcnNYPPqFoaOXvQP/Fl6esRabQ29bknjWk+fMvDUvU+ewpV1ssLmOa9ji1zTbXNNEH6hFiZjuXudI9z5HFz3ElznGyT9SVPCTO/IpVDSCpQ2aRFSG1SI5YJZcaZk0Ej4pWG2vYaLT7FSYie0rFprO4lTSy5Ez5p5HyyvNue9xJcfcpERHaEm02ncywAVTbCkdqkRUhs0gqRJNImzSCpENIGkDSiJDbjpV3tUhs0iKkQgIbNKBpEVIGkEETaQ2aQ2wpV0qUDSIaQFImzSG1SGzSIQEFSJs0gqUTbjCrQoJEKIggURUoFESCQZIipB//Z",
      title: "Netlify",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "data:image/png;base64,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",
      title: "Vercel",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_bf0fb4cb7fe948c42f37ded73895638f/salesforce-heroku.png",
      title: "Heroku",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: "https://initialcommit.com/img/initialcommit/baby-git-release.png",
      title: "git",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: "data:image/png;base64,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",
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },   
  ];

  return (
    <div
      name="techstack"
      className="bg-black from-gray-800 to-gradient-to-b w-full
       h-full "
    >
       {/* h-[60rem] */}
      <div className="max-w-screen-lg mx-auto  p-4 flex 
      flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4
           border-gray-500 p-2 mt-30 md">
            Tech Tools I Used
          </p>
          <p className="py-6">These are the tools I've worked with</p>
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
  );
};

export default Tools;