import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

function page() {
  return (
    <div>
        <div className='w-full p-3 bg-gray-600 flex '>
 
  <Image 
  src="https://www.dewr.gov.au/sites/default/files/images/2022-08/about-us.svg"
  alt='image'
  width={154.09}
  height={150}
  />
   <h2 className='md:hidden text-center p-3 text-white font-roboto text-3xl font-bold  mt-[45px]  ml-[35px]'>About Us</h2>
</div>
<div className='bg-green-700 w-full h-6'></div>


<section className='h-screen items-center justify-center '>
    <h1 className='text-left font-medium mt-[45px] text-3xl'>About the <span className='text-green-600 relative'>department</span></h1>

<section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/about-d">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">About the department</h3>
                    <p className=" font-extralight text-xl ">We support people to have safe, secure and well-paid work with the skills for a sustainable future.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/about-department/our-ministers">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2 p-4">
                    <h3 className="text-2xl font-bold">Ministers</h3>
                    <p className=" font-extralight text-xl ">Ministers for the Department of Employment and Workplace Relations.
                    </p>
                  </div>
                </CardHeader>
               
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/about-department/our-executive">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Executive</h3>
                   <p className="font-extralight text-[18px]">The executive the Department of Employment and Workplace Relations.</p>
                  </div>
                </CardHeader>
              </Card>
              </Link>
              
              

            </div>
          </div>
        </section>

        <section className="w-full  md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container  px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/about-department/resources/organisation-chart-dewr">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Organisation Chart</h3>
                    <p className=" font-extralight text-xl ">We support people to have safe, secure and well-paid work with the skills for a sustainable future.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              </Link>
              
              

            </div>
          </div>
        </section>


</section>



<section className='h-screen items-center justify-center '>
    <h1 className='text-left font-medium mt-[45px] text-3xl ml-[56px]'> <span className='text-green-600 relative'>Careers</span></h1>

<section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/about-d">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Working with us</h3>
                    <p className=" font-extralight text-xl ">The Department of Employment and Workplace Relations enables access to quality skills, training, and employment to support Australians to find secure work in fair, productive and safe workplaces – supporting individuals and our nation to prosper.


                    </p>
                  </div>
                </CardHeader>
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/about-department/our-ministers">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2 p-4">
                    <h3 className="text-2xl font-bold">Graduate Program</h3>
                    <p className=" font-extralight text-xl ">Our Entry Level Programs offer pathways and opportunities for participants to launch a successful career in the Australian Public Service.

                    </p>
                  </div>
                </CardHeader>
               
              </Card>
              </Link>
            
              
              

            </div>
          </div>
        </section>

        <section className="w-full  md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container  px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/about-department/resources/organisation-chart-dewr">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Organisation Chart</h3>
                    <p className=" font-extralight text-xl ">We support people to have safe, secure and well-paid work with the skills for a sustainable future.
                    </p>
                  </div>
                </CardHeader>
              </Card>
              </Link>
              
              

            </div>
          </div>
        </section>


</section>

    </div>

  )
}

export default page