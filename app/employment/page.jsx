
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>

{/* Landing */}
<div className='w-full p-3 bg-gray-600 flex '>
 
 <Image 
 src="https://www.dewr.gov.au/sites/default/files/images/2020-11/Skills%20and%20Training.svg"
 alt='image'
 width={154.09}
 height={150}
 />
  <h2 className=' text-center p-3 text-white font-roboto text-3xl font-bold  mt-[45px]  ml-[35px]'>Employment</h2>
</div>
<div className='bg-[#277DB2] w-full h-6'></div>


<h1 className='text-left font-medium mt-[45px] text-3xl'>For<span className='text-[#277DB2] relative'> individuals</span>  </h1>
<section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/new-voluntary-parent-service">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">A new voluntary service supporting parents</h3>
                    <p className=" font-extralight text-xl ">We’re designing a new voluntary service that supports parents who care for young children.
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/employment/finding-job">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2 p-4">
                    <h3 className="text-2xl font-bold">Finding a job</h3>
                    <p className=" font-extralight text-xl ">If you're looking for a job, a career change or guidance, these programs may be able to help you.


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
              <Link href="https://www.dewr.gov.au/employment/finding-regional-jobs">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Finding regional jobs</h3>
                    <p className=" font-extralight text-xl ">These programs and initiatives can help you to find jobs in regional or rural Australia. 
                    </p>
                  </div>
          
                </CardHeader>
                
              </Card>
</Link>
<Link href="https://www.dewr.gov.au/skills-and-training/skills-support-40-years-and-older">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Career options for 45 years and older</h3>
     <p className=" font-extralight text-[18px] ">If you're 45 years or over, discover these programs and support initiatives that can assist on your job path. 
                    </p>
                   
                  </div>
                </CardHeader>
              
              </Card>
</Link>
       <Link href="https://www.dewr.gov.au/employment/jobs-under-25s">
       
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Job opportunities for under 25s</h3>
                 
                    <p className="text-[18px] font-extralight">Support is available to help you with the cost of training and learning new skills for work.  
                    </p>
                   
                  </div>
                </CardHeader>
               
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/employment/help-preparing-new-job">
       
       <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
         <CardHeader>
           <div className="space-y-2">
           <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Help preparing for a new job</h3>
          
             <p className="text-[18px] font-extralight">
Get job ready with these programs and initiatives.   
             </p>
            
           </div>
         </CardHeader>
        
       </Card>
</Link>

<Link href="https://www.dewr.gov.au/employment/support-aboriginal-and-torres-strait-islander-peoples">
       
       <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
         <CardHeader>
           <div className="space-y-2">
           <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Support for Indigenous Australians</h3>
          
             <p className="text-[18px] font-extralight">
                Discover the programs and initiatives that can help you with finding a job, preparing for work and getting extra skills and experience. 
             </p>
            
           </div>
         </CardHeader>
        
       </Card>
</Link>
              
              

            </div>

<h1  className="text-left font-medium mt-[45px] text-3xl">For <span className="text-[#277DB2] relative">business</span></h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/employment/hiring-staff">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Hiring staff</h3>
                    <p className=" font-extralight text-xl ">If you're looking to hire staff, discover the government services and programs you can use to help you understand what you need to do.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>
<Link href="https://www.dewr.gov.au/employment/employing-apprentices">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Employing apprentices</h3>

                    <p className=" font-extralight text-[18px] ">If you're thinking about employing an apprentice or trainee, find extra support through government programs that can help your decision. 
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/employment/financial-incentives-business">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Financial incentives for businesses</h3>

                    <p className=" font-extralight text-[18px] "> Check your eligibility for the programs and initiatives that can help you with the cost of hiring employees.  
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/employment/finding-regional-employees">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Finding regional employees</h3>

                    <p className=" font-extralight text-[18px] ">Find employees in regional areas with these programs and resources. 
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/employment/supporting-staff-disability">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Supporting staff with disability
</h3>

                    <p className=" font-extralight text-[18px] "> 
                    The government can help you to support employees with ill health or disability. 
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/employment/hiring-under-25-year-old-staff">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Hiring under 25 year old staff
</h3>

                    <p className=" font-extralight text-[18px] ">Find the programs and incentives available so you can recruit and hire young people for your business. 

 
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/employment/hiring-overseas-workers-or-migrants">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Hiring overseas workers or migrants</h3>

                    <p className=" font-extralight text-[18px] ">If you're looking to hire overseas workers or migrants, find programs and resources to help you out. 
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

            </div>


<h1 className="text-left font-medium mt-[45px] text-3xl"> <span className="text-[#277DB2] relative">Self-employment</span>  </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/employment/support-self-employment">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Support for self-employment</h3>
                    <p className=" font-extralight text-xl ">If you're starting a business, find out what support is available and connect with local services. Here's a range of support and programs the Australian Government offers to support your business development. 
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>
            </div>


            <h1 className="text-left font-medium mt-[45px] text-3xl">Workplace <span className="text-[#277DB3] relative">Rights</span> </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/workplace-relations/understand-your-workplace-rights">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Understand your workplace rights</h3>
                    <p className=" font-extralight text-xl ">These resources can help you to understand your rights and responsibilities in the workplace. 
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/workplace-relations/understand-your-workplace-rights">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Working in Australia on a visa</h3>
                    <p className=" font-extralight text-xl ">These resources can help you understand your rights and protections while working in Australia on a visa. 
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/workplace-relations/dealing-workplace-injury">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Dealing with a workplace injury</h3>
                    <p className=" font-extralight text-xl ">There are resources available to help you if you've been injured at work. 
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>




            </div>

            <h1 className="text-left font-medium mt-[45px] text-3xl"> <span className="text-[#277DB2] relative">Governance </span>and <span className="text-[#277DB2] relative">data</span> </h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/employment/employment-research-evaluations-and-data">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Employment research</h3>
                    <p className=" font-extralight text-xl ">Discover employment reports, data and research.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/employment/international-engagement-employment-issues">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">International Engagement on Employment issues</h3>
                    <p className=" font-extralight text-xl ">The Employment group informs the department's domestic policy work through multilateral engagement, conducting research and bilateral engagement.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>


            </div>


          

            <h1 className="text-left font-medium mt-[45px] text-3xl">For <span className="text-[#277DB2] relative">employment services</span> <span className="text-[#277DB2]"> providers</span></h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/employment/employment-service-providers">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Providers</h3>
                    <p className=" font-extralight text-xl ">If you're an Employment Services Provider, use these resources to apply for programs and to understand their requirements.
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