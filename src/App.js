import { jobs } from './jobs';
import logo from "./assets/img/getdev-logo.svg";

function App() {

  return (
    <div className="App  container mx-auto flex justify-center  items-center">
      <div>
        <div className='p-4  center'>
          <img src={logo} alt='GetDev Logo' width={100} height={100} className='center' />
          <h1 className='text-xl'>GetDev Job Listings</h1>
          <p className='text-lg'>We've compiled a list of job listings from our clients. </p>
        </div>
        {
          jobs.map((job, key) => (
            <div key={key} className='my-4  p-2 hover:bg-gray-100 hover:rounded-lg w-3/5'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='font-extrabold'>{job.title}</h2>
                  <p>Salary: ₦{job.salaryRange}</p>
                  <p>Category:  {job.category}</p>
                  <div className='w-3/5 px-2'>
                    <p className='-ml-2'>Requirements</p>
                    {
                      job.requirements.map((item, k) => (
                        <span key={k} className='text-xs bg-gray-100 p-1 rounded-full space-x-2 mr-1'>{item}</span>
                      ))
                    }
                  </div>
                </div>
                <a href={job.applyUrl} target='_blank' className='bg-blue-600 p-3 text-white px-5 rounded-md hover:bg-blue-500 cursor-pointer'>Apply</a>
              </div>
              <p>{job.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
