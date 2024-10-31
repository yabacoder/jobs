import { jobs } from './jobs';
import logo from "./assets/img/getdev-logo.svg";

function App() {

  return (
    <>
      <div className="flex items-center justify-center w-full p-2 lg:w-3/5">
        <div className='m-2'>
          <div className='flex items-center justify-center'>
            <div className=''>
              <img src={logo} alt='GetDev Logo' width={100} height={100} className='mx-auto' />
              <h1 className='text-xl text-center'>GetDev Job Listings</h1>
              <p className='text-lg text-center'>We've compiled a list of job listings from our clients. </p>
            </div>
          </div>
          <div>
            {
              jobs.map((job, k) => (
                <div className='w-full p-2 m-4 hover:bg-gray-100 hover:rounded-lg'>
                  <div className='flex items-center justify-between w-full'>
                    <div>
                      <h2 className='font-extrabold'>{job.title}</h2>
                      <p>Salary: ₦{job.salaryRange}</p>
                      <p>Category:  {job.category}</p>
                      <div className='flex-wrap w-2/3 '>
                        <p className=''>Requirements</p>
                        {
                          job.requirements.slice(0, 5).map((item, k) => (
                            <span key={k} className='p-1 mr-1 space-x-2 text-xs bg-gray-100 rounded-full'>{item}</span>
                          ))
                        }
                      </div>
                    </div>
                    <div>
                      <a href='' target='_blank' className='p-3 px-5 text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-500'>Apply</a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

        </div>
      </div>
      <div>
        <p className='text-center text-gray-500'>&copy; <a href="https://getdev.co">GetDev</a>  2024. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
