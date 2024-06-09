
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>

{/* Landing */}
<div className="w-full p-3 bg-gray-600 flex ">
 
 <Image 
 src="https://www.dewr.gov.au/sites/default/files/images/2020-11/Skills%20and%20Training.svg"
 alt='image'
 width={154.09}
 height={150}
 />
  <h2 className=" text-center p-3 text-white font-roboto text-3xl font-bold  mt-[45px]  ml-[35px]">Skills and Training</h2>
</div>
<div className='bg-[#FFCE51] w-full h-6'></div>


<h1 className="text-left font-medium mt-[45px] text-3xl"><span className="text-[#FFCE51] relative">Support</span> and <span className="text-[#FFCE51] relative">training</span> for employment </h1>
<section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/skills-and-training/support-get-you-jobready">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Support to get you job-ready</h3>
                    <p className=" font-extralight text-xl ">Find programs and initiatives to help you get job-ready.
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/skills-and-training/help-guide-your-career-choices">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2 p-4">
                    <h3 className="text-2xl font-bold">Help to guide your career choices</h3>
                    <p className=" font-extralight text-xl ">Find useful information and resources to help you make an informed decision about your current or future career.
                    </p>
                  </div>
                </CardHeader>
               
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/skills-and-training/becoming-apprentice-or-trainee-0">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Becoming an apprentice or trainee</h3>
                   <p className="font-extralight text-[18px]">If you're considering becoming an apprentice or trainee, this information and support can help you understand what's involved.</p>
                  </div>
              
                </CardHeader>
                
              </Card>
              </Link>
              
              

            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800">
          
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/skills-and-training/job-training-school-leavers">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Job training for school leavers</h3>
                    <p className=" font-extralight text-xl ">
Find training and support to help you find a job before or after you finish school.
                    </p>
                  </div>
          
                </CardHeader>
                
              </Card>
</Link>
<Link href="https://www.dewr.gov.au/skills-and-training/skills-support-40-years-and-older">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Skills support for 40 years and older</h3>
     <p className=" font-extralight text-[18px] ">If you are 40 years or older, find a range of program and initiatives designed to support your job pathways.
                    </p>
                   
                  </div>
                </CardHeader>
              
              </Card>
</Link>
       <Link href="https://www.dewr.gov.au/skills-and-training/help-cost-training">
       
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Help with the cost of training</h3>
                 
                    <p className="text-[18px] font-extralight">Support is available to help you with the cost of training and learning new skills for work.  
                    </p>
                   
                  </div>
                </CardHeader>
               
              </Card>
</Link>
              
              

            </div>

<h1  className="text-left font-medium mt-[45px] text-3xl">For <span className="text-[#FFCE51] relative">employers</span></h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/skills-and-training/hire-apprentice-or-trainee">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Hire an apprentice or  trainee</h3>
                    <p className=" font-extralight text-xl ">Find out how to hire an apprentice or trainee for your workplace. 
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>
<Link href="https://www.dewr.gov.au/skills-and-training/training-staff">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Training Staff</h3>

                    <p className=" font-extralight text-[18px] ">Ensure your staff have the right skills for your business needs. 
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

            </div>


<h1 className="text-left font-medium mt-[45px] text-3xl">The <span className="text-[#FFCE51] relative">Future</span> of <span className="text-[#FFCE51] relative">Skills</span> </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/skills-reform">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Skills reform and National Skills Agreement</h3>
                    <p className=" font-extralight text-xl ">Find out more about skills reform and the National Skills Agreement.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>
<Link href="https://www.dewr.gov.au/skills-and-training/skills-councils-and-committees">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Skills councils and committees</h3>

                    <p className=" font-extralight text-[18px] ">Information on the councils and committees that advise, support and make decisions to progress skills and training matters.
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

            </div>


            <h1 className="text-left font-medium mt-[45px] text-3xl"> <span className="text-[#FFCE51] relative">Transfering Skills</span> and <span className="text-[#FFCE51] relative">licenses</span> </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/skills-and-training/skills-recognition">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Get your skills or licences recognised</h3>
                    <p className=" font-extralight text-xl ">Find out how you can get your skills and licences recognised. 
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>




            </div>

            <h1 className="text-left font-medium mt-[45px] text-3xl">For <span className="text-[#FFCE51] relative">industry and</span> <span className="text-[#FFCE51] relative">government</span> </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/skills-and-training/reviewing-training-products">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Reviewing training products</h3>
                    <p className=" font-extralight text-xl ">Find out how training package products are reviewed to make sure they meet national standards and policy.  
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


            </div>


            <h1 className="text-left font-medium mt-[45px] text-3xl">For training <span className="text-[#FFCE51] relative">Providers</span></h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/skills-and-training/reviewing-training-products">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Requirements for training providers</h3>
                    <p className=" font-extralight text-xl ">If you're a training provider, know the requirements and obligations you need to adhere to.  
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


            </div>

            <h1 className="text-left font-medium mt-[45px] text-3xl"><span className="text-[#FFCE51] relative">Data, Reviews</span> and <span className="text-[#FFCE51]"> strategies</span></h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/skills-and-training/skills-data">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Skills Data</h3>
                    <p className=" font-extralight text-xl ">Learn how VET data is collected and used and explore employment data.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/skills-and-training/skills-research-and-reviews">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Skills research and reviews</h3>
                    <p className=" font-extralight text-xl ">Find research, reviews and reports on the skills industry.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/skills-and-training/national-skills-strategies">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">National skills strategies</h3>
                    <p className=" font-extralight text-xl ">These skills strategies support and guide the sector in Australia.


                    </p>
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