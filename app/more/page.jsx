
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// WrongIcon component
function WrongIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="28"
      height="24"
      {...props}
    >
      <path
        fill="#F44336"
        d="M21.5 4.5H26.501V43.5H21.5z"
        transform="rotate(45.001 24 24)"
      />
      <path
        fill="#F44336"
        d="M21.5 4.5H26.5V43.501H21.5z"
        transform="rotate(135.008 24 24)"
      />
    </svg>
  );
}

// FeatureCard component to display feature details
function FeatureCard({ title, children}) {
  return (
    <div className="p-6 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}
function page() {
  return (
    <div>

{/* Landing */}
<div className='w-full p-3 bg-gray-600'>
  <h2 className='text-center p-3 text-white font-roboto text-xl'>We support people to have safe, secure and well-paid work with the skills for a sustainable future.</h2>
</div>
<div className='bg-green-700 w-full h-6'></div>

<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/skills">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Skills and Training</h3>
                    <p className=" font-extralight text-xl ">Includes initiatives to upskill and train you for the jobs of today and tomorrow through apprenticeships and training.
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
              </Link>
              <Link href="/employment">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2 p-4">
                    <h3 className="text-2xl font-bold">Employment</h3>
                    <p className=" font-extralight text-xl ">Includes services and support to help overcome barriers and develop the required skills to gain employment.
                    </p>
                  </div>
                </CardHeader>
               
              </Card>
              </Link>
              <Link href="/workplace">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Workplace relations</h3>
                   <p className="font-extralight text-[18px]">Includes initiatives to upskill and train you for the jobs of today and tomorrow through apprenticeships and training.</p>
                  </div>
                  <div class=" text-black mt-6  py-2 px-4 rounded flex">Closing Loopholes
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>
                </CardHeader>
                
              </Card>
              </Link>
              
              

            </div>
          </div>
        </section>
        <h1 className='text-3xl text-center bg-gray-100 text-green-700 font-bold'>Featured</h1>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                    <Image
                    src="https://www.dewr.gov.au/sites/default/files/styles/card_xl/public/images/2023-09/Tile%20%E2%80%93%20Closing%20Loopholes.png?itok=4XdI4tHa"
                    width={720}
                    height={457}
                    />
                    <p className=" font-extralight text-xl ">Changes to workplace relations laws arising from the Closing Loopholes and Closing Loopholes No. 2 Acts
                    </p>
                  </div>
                  <div class=" text-black mt-6  py-2 px-4 rounded flex">Closing Loopholes
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>
                </CardHeader>
                
              </Card>

              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">

<Image
src="https://www.dewr.gov.au/sites/default/files/styles/card_xl/public/images/2023-07/Feature-tile-%E2%80%93-Consultation-%E2%80%93-A-new-voluntary-parent-support-service.jpg?itok=mcOkhgBw"
width={720}
height={457}
/>
                    <p className=" font-extralight text-[18px] ">A new voluntary parent support service
                    </p>
                    <div class=" text-black mt-6  py-2 px-4 rounded flex">New Service
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>

                  </div>
                </CardHeader>
              
              </Card>

              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                    <Image 
                    src="https://www.dewr.gov.au/sites/default/files/styles/card_xl/public/images/2023-08/Featured%20Tile%20%E2%80%93%20DEWR%20Consultation%20Hub.png?itok=JMrixF1Q"
                    width={720}
                    height={457} 
                    />
                    <p className="text-[18px] font-extralight">Visit the DEWR Consultation Hub to view open and closed consultations
                    </p>
                    <div class=" text-black mt-6 py-2 px-4 rounded flex">Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>
                  </div>
                </CardHeader>
               
              </Card>

              
              

            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                    <Image
                    src="https://www.dewr.gov.au/sites/default/files/styles/card_xl/public/images/2022-02/1401%20Workforce%20Australia%20Web%20Tile_02_AW.jpg?itok=hdFYCwWh"
                    width={800}
                    height={457}
                    />
                    <p className=" font-extralight text-xl ">Visit Workforce Australia to search and apply for jobs
                    </p>
                  </div>
                  <div class=" text-black mt-6 font py-2 px-4 rounded flex uppercase">Workforce Australia
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>
                </CardHeader>
                
              </Card>

              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">

<Image
src="https://www.dewr.gov.au/sites/default/files/styles/card_xl/public/images/2023-06/2554%20Your%20Career%20tile%20Internet_AW.png?itok=c9h8pEJ2"
width={720}
height={457}
/>
                    <p className=" font-extralight text-[18px] ">Visit Your Career for clear and simple careers information
                    </p>
                    <div class=" text-black mt-6 font-bold py-2 px-4 rounded flex  uppercase">Your Career
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>

                  </div>
                </CardHeader>
                
              </Card>

<Link href="https://www.dewr.gov.au/jobs-and-skills-australia/jobs-and-skills-australia-ministerial-advisory-board">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                    <Image 
                    src="https://www.dewr.gov.au/sites/default/files/styles/card_xl/public/images/2023-03/Feature%20tile%20%E2%80%93%20Jobs%20and%20Skills%20Australia.jpg?itok=bbarNbJh"
                    width={720}
                    height={457} 
                    />
                    <p className="text-[18px] font-extralight">Jobs and Skills Australia Ministerial Advisory Board announced
                    </p>

                    <div class=" text-black mt-6 font-bold py-2 px-4 rounded flex uppercase">Jobs and Career Australia
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>
</div>
                  </div>
                </CardHeader>
               
              </Card>

              
              </Link>

            </div>
          </div>
        </section>
    </div>
  )
}

export default page

