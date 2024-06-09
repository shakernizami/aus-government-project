
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div>

{/* Landing */}
<div className="w-full p-3 bg-gray-600 flex ">
 
 
 <Image 
 src="https://www.dewr.gov.au/sites/default/files/images/2022-08/illustration-workplace-relations.svg"
 alt='image'
 width={154.09}
 height={150}
 />
  <h2 className=" text-center p-3 text-white font-roboto text-3xl font-bold  mt-[45px]  ml-[35px]">Workplace Relations</h2>
</div>
<div className='bg-[#F48072] w-full h-6'></div>

<p className="text-[#F36858] m-[10px] text-[24px] text-left ">We facilitate jobs growth through policies and programs that promote fair, productive and safe workplaces.</p>
<h1 className="text-left text-[30px] ml-[56px]">Workplace relations</h1>
<section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/workplace-reform-consultation">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl text-md ">
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">2023 Workplace Reform Consultations</h3>
                    <p className=" font-extralight text-xl ">Consultation undertaken on proposed reforms to the Fair Work laws over 2022-23.

                    </p>
                  </div>
                </CardHeader>
                
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/closing-loopholes">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2 p-4">
                    <h3 className="text-2xl font-bold">Closing Loopholes</h3>
                    <p className=" font-extralight text-xl ">Changes to workplace relations laws arising from the Fair Work Legislation Amendment (Closing Loopholes) Act 2023 and Fair Work Legislation Amendment (Closing Loopholes No. 2) Act 2024.


                    </p>
                  </div>
                </CardHeader>
               
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/protecting-worker-entitlements">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Protecting Worker Entitlements
</h3>
                   <p className="font-extralight text-[18px]">Several changes to Australia’s workplace relations laws have been passed by Parliament.
</p>
                  </div>
              
                </CardHeader>
                
              </Card>
              </Link>
              <Link href="https://www.dewr.gov.au/secure-jobs-better-pay">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Secure Jobs, Better Pay
</h3>
                   <p className="font-extralight text-[18px]">A number of changes to Australia’s workplace relations laws have been passed by Parliament.
</p>
                  </div>
              
                </CardHeader>
                
              </Card>
              </Link>
              
              

            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  dark:bg-gray-800">
        <h1 className="text-left text-[30px] ml-[56px]">Statutory Reviews</h1>
        <br />
        <br />
          <div className="container space-y-12 px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="https://www.dewr.gov.au/workplace-relations-australia/review-paid-family-and-domestic-violence-leave">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Review of Paid Family and Domestic Violence Leave</h3>
                    <p className=" font-extralight text-xl ">
                    An independent statutory review into the operation of the Fair Work Amendment (Paid Family and Domestic Violence Leave) Act 2022.
                    </p>
                  </div>
          
                </CardHeader>
                
              </Card>
</Link>

              
              

            </div>

<h1  className="text-left font-medium mt-[45px] text-3xl ml-[56px]">Workplace Rights</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/workplace-relations/support-employers">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Support for employers</h3>
                    <p className=" font-extralight text-xl ">Helping employers understand how to meet their workplace safety, pay and entitlements obligations.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/workplace-relations/understand-your-workplace-rights">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Working in Australia  on a Visa</h3>

                    <p className=" font-extralight text-[18px] ">These resources can help you understand your rights and protections while working in Australia on a visa.  


                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/workplace-relations/working-australia-visa">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Working in Australia  on a Visa</h3>

                    <p className=" font-extralight text-[18px] ">These resources can help you understand your rights and protections while working in Australia on a visa.  


                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>


<Link href="https://www.dewr.gov.au/workplace-relations/dealing-workplace-injury">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Dealing with a workplace injury</h3>

                    <p className=" font-extralight text-[18px] "> There are resources available to help you if you've been injured at work.   


                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/workplace-relations/workplace-support-individuals">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Support for individuals</h3>
                    <p className=" font-extralight text-xl ">Services and support for individuals working in Australia</p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>

            </div>


<h1 className="text-left font-medium mt-[45px] text-3xl ml-[56px]">Workplace safety</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/workplace-relations/health-and-safety-workplace">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Health and safety in the workplace</h3>
                    <p className=" font-extralight text-xl ">Understand your responsibilities to provide a safe work environment and conducting work in a safe manner.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>
<Link href="https://www.dewr.gov.au/skills-and-training/skills-councils-and-committees">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Review of the Federal Safety Commissioner</h3>

                    <p className=" font-extralight text-[18px] ">An independent review of the Federal Safety Commissioner.
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

<Link href="https://www.dewr.gov.au/engineeredstone">
              <Card className="cursor-pointer hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Prohibition on the use of engineered stone</h3>

                    <p className=" font-extralight text-[18px] ">Australian Governments have responded to the recommendation of Safe Work Australia’s Decision Regulation Impact Statement.
                    </p>
                  </div>
                </CardHeader>
                
              </Card>
</Link>

            </div>


            <h1 className="text-left font-medium mt-[45px] text-3xl">International engagement on labour issues</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/international-engagement-labour-issues">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">International engagement on labour issues</h3>
                    <p className=" font-extralight text-xl ">The department engages internationally to advance, protect and promote Australia's broader national and international interests on labour issues.
                    </p>
                  </div>
               
                </CardHeader>
                
              </Card>
</Link>




            </div>

            <h1 className="text-left font-medium mt-[45px] text-3xl">Meetings of Workplace Relations Ministers
</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<Link href="https://www.dewr.gov.au/meetings-workplace-relations-ministers">
              <Card className="cursor-pointer  hover:drop-shadow-md md:drop-shadow-xl ">
                <CardHeader>
                  <div className="space-y-2">
                  <h3 className="text-2xl font-bold hover:border-[#54a8cd] transition-all duration-300">Meetings of Workplace Relations Ministers
</h3>
                    <p className=" font-extralight text-xl "> Meetings with Commonwealth, state and territory Ministers responsible for workplace relations.

  
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