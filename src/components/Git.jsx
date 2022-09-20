import GitHubCalendar from 'react-github-calendar';

export const Showcase=()=>{
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
return(
  <div className='bg-gradient-to-b from-gray-800 to-gray-800 text-white  '>
    <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full '>
    <p className="text-4xl font-bold flex flex-col p-4 justify-center inline
     border-b-4 border-gray-600 mt-20">
            Github Contribution
          </p>
    <div className='github_Calendar mt-20'>
      <GitHubCalendar style={{margin:"auto"}}
      username="ingole8888"
      transformData={selectLastHalfYear}
      hideColorLegend
      />
    </div>
    <img className='w-2/3 m-auto mt-20'
    src="https://camo.githubusercontent.com/1fd5c609de11707b720d3bea4e6a3b3d0e7072e3d094fb17c607be5fbbf23032/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d696e676f6c653838383826"
    alt=""
    />
    </div>
  </div>
)  
}