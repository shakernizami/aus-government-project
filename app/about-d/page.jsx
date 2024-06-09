import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function AboutDepartment() {
  return (
    <div className='min-h-screen about-ds'>
      {/* Header */}
      <div className='w-full p-3 bg-gray-600'>
        <h2 className='p-3 text-white font-roboto text-3xl font-bold'>About The Department</h2>
        <div className='bg-green-700 w-full h-6'></div>
      </div>

      {/* Main Content - Flex Container */}
      <div className="flex flex-col md:flex-row about-dc">
        {/* Side Navigation (Hidden on Mobile) */}
        <div className="md:w-64 w-[400px] bg-gray-900 p-[23px] text-white overflow-y-auto hidden md:block">
          <nav className="flex flex-col space-y-2 p-4">
            <Link href="#" className="text-xl font-bold text-gray-300 hover:text-white">
              About the department
            </Link>
            <ul className="list-none space-y-1">
              <li><Link href="#info" passHref className="text-base hover:text-white">Information</Link></li>
              <li><Link href="#corporate" className="text-base hover:text-white">Corporate reporting</Link></li>
            
            </ul>
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-4">
          <div className='mx-auto' id='info'>
            <h1 className='text-center font-extralight text-[#647F43] text-4xl'>We support people to have safe, secure and well-paid work with the skills for a sustainable future.</h1>

            <p className='text-[18px] mt-4'>
              Secure jobs are vital for our nation to prosper—driving future economic growth and providing people with certainty.
            </p>

            <p className='mt-6 text-[18px]'>
              In the midst of fast-paced social, economic and global changes, we focus on equipping Australians who are starting, advancing or changing their career with the relevant skills, knowledge and experience to gain or regain employment.
            </p>

            <p className='mt-6 text-[18px]'>
              We work actively to fill skill gaps to support Australia&apos;s economic growth by identifying industries with skill shortages, including in emerging industries fundamental to the prosperity of individuals, businesses, and our nation.
            </p>

            <p className='mt-6 text-[18px]'>
              We support a world-leading vocational education and training sector offering apprenticeships, cadetships, and traineeships helping to address future skill demands – driving better outcomes through an agile skills sector in tune with market demands.
            </p>

            <p className='mt-6 text-[18px]'>
              Our work supports local, safe, and secure employment underpinned by a safety net of pay, conditions, and workplace rights and responsibilities that both employers and employees can have confidence in.
            </p>

            <p className='mt-6 text-[18px]'>
              Our strategic purpose includes:
            </p>
            <ol>
              <li className='list-decimal'>
                <h1 className='font-bold text-[28px] mt-5 text-black'>Outcome one </h1>
                <p className='mt-6 text-[18px]'>
                  Foster a productive and competitive labour market through policies and programs that assist job seekers into work, including secure work, and meet employer and industry needs
                </p>
              </li>
              <li className='list-decimal'>
                <h1 className='font-bold text-[28px] mt-5 text-black'>Outcome 2 </h1>
                <p className='mt-6 text-[18px]'>
                  Promote growth in economic productivity and social wellbeing through access to quality skills and training.
                </p>
              </li>
              <li className='list-decimal'>
                <h1 className='font-bold text-[28px] mt-5 text-black'>Outcome 3 </h1>
                <p className='mt-6 text-[28px] font-bold text-black'>
                  Our Ministers and Executive
                </p>
                <p className='mt-6 text-[24px] font-bold text-black'>
                  Ministers
                </p>
                <Link href="https://www.dewr.gov.au/about-department/our-ministers">
                  <span className='text-sky-500 font-medium underline'>Ministers for the Department of Employment and Workplace Relations.</span>
                </Link>
              </li>
            </ol>
          </div>

          <div className='items-center mt-4' id='corporate'>
            <h1 className='text-center text-5xl font-medium text-black'>Corporate reporting and plans</h1>
            <p className='text-left text-3xl mt-4 p-3 text-black font-medium'>Budget</p>
            <Link href="https://www.dewr.gov.au/about-department/corporate-reporting/budget">
              <span className='text-left text-sky-500 hover:underline font-medium'>The Department's Portfolio Budget information for each financial year.</span>
            </Link>
            <p className='text-left text-3xl mt-4 p-3 text-black font-medium'>Reconciliation Action Plan</p>
            <Link href="https://www.dewr.gov.au/about-department/reconciliation-action-plan">
              <span className='text-left text-sky-500 hover:underline font-medium'>The Department's Reconciliation Action Plan.</span>
            </Link>
            <p className='text-left text-3xl mt-4 p-3 text-black font-medium'>Corporate Reporting</p>
            <Link href="https://www.dewr.gov.au/about-department/corporate-reporting">
              <span className='text-left text-sky-500 hover:underline font-medium'>The Department's Corporate Reporting.</span>
            </Link>
            <p className='text-left text-3xl mt-4 p-3 text-black font-medium'>Other Corporate Resources</p>
            <Link href="https://www.dewr.gov.au/resources/about-department">
              <span className='text-left text-sky-500 hover:underline font-medium'>Other Corporate Resources.</span>
            </Link>
          </div>

          <div className='flex flex-row' id='work'>
            <Image
              src="https://www.dewr.gov.au/sites/default/files/icons/2020-11/Work%20with%20us%20-%20about%20us.svg"
              alt=''
              width={320}
              height={320}
            />
            <h1 className="mt-[100px] text-4xl">Work With Us</h1>
          </div>
          <Link className='hover:underline ml-[350px] mb-[340px] font-medium bg-green-500 p-4' href="https://www.dewr.gov.au/about-department/work-us">Work with us current vacancies</Link>
        </div>
      </div>
    </div>
  );
}

export default AboutDepartment;
