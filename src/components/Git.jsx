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
    </div>
  </div>
)  
}