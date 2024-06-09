import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Page() {
  return (
    <div className="px-4 md:px-8 lg:px-16"> {/* Adjust overall padding for different screen sizes */}
      <div className="bg-gray-600 h-[250px] md:h-[450px] relative"> {/* Adjust height for mobile */}
        <Image
          src="https://www.dewr.gov.au/sites/default/files/styles/article_xl/public/images/2023-10/Newsroom%20Banner-%20BRII.png?itok=DPcpNk5P"
          alt="image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-green-700 h-6"></div>

      <h1 className="text-center text-3xl md:text-5xl my-8"> {/* Adjust font size for mobile */}
        Grant funding is now available for innovative startups and small to medium businesses
      </h1>

      <div className="px-4 md:px-0"> {/* Adjust horizontal padding for mobile */}
        <p className="bg-yellow-200 text-black text-lg md:text-xl py-4 md:py-6 text-center">
          To apply for grant, please click here
          <Link className="text-gold-900 underline" href="my.gov.au"> my.gov.au</Link> 
          
        </p>

        <h2 className="text-lg md:text-2xl text-gray-800 font-light my-8">
          The Australian Government is looking for innovative solutions to improve the modern awards
          user experience in the latest Business Research and Innovation Initiative (BRII) round
        </h2>

        <Image
          src="https://www.dewr.gov.au/sites/default/files/styles/article_xl/public/images/2023-10/Newsroom%20Banner-%20BRII.png?itok=DPcpNk5P"
          alt=""
          width={990}
          height={450}
          className="mx-auto my-8" 
        />

        <p className="text-gray-700 text-lg md:text-xl font-light mb-8">
          The BRII provides startups and small to medium enterprises with grant funding to develop
          innovative solutions for government policy and service delivery challenges. In the latest
          round of grants available, they are seeking innovative solutions to improve the modern
          awards user experience.
          <br />
          Businesses can submit ideas that:
        </p>

        <ul className="list-disc ml-8 md:ml-12 mb-8">
          <li className="text-lg md:text-xl">Make finding and applying for modern awards easier</li>
          <li className="text-lg md:text-xl">Respond to modern award changes effectively</li>
          <li className="text-lg md:text-xl">Curate modern award information for small business owners</li>
        </ul>

        <p className="font-light text-lg md:text-xl mb-8">
          Innovative ideas could include natural language processing, chatbots, machine learning, etc.
        </p>

        <p className="font-light text-lg md:text-xl mb-8">
          For more information on the Business Research and Innovation Initiative and how to apply,
          visit the BRII Workplace Relations{' '}
          <Link href="https://business.gov.au/grants-and-programs/brii-workplace-relations-usability-challenge">
            Usability Challenge Feasibility grant page
          </Link>{' '}
          on the Business.gov.au website.
        </p>

        <p className="text-lg md:text-xl mb-8">Field Enter:</p>

        <Link href="https://www.dewr.gov.au/newsroom?category=nc9261" className="bg-gray-100 underline text-blue-700 text-lg md:text-xl p-3 block mb-8">
          Business and Industry
        </Link>

        <div className="bg-gray-800 rounded-lg p-4 md:p-8 mb-8">
          <p className="font-bold text-white text-lg mb-4">Media Enquiry</p>
          <p className="font-bold text-white text-lg mb-4">Call 02 6240 4957</p>
          <p className="font-bold text-white text-sm">Mail media@dewr.gov.au</p>
          <p className="font-bold text-white text-lg mt-4">Newsroom enquiries</p>
          <p className="font-bold text-white text-sm">communication@dewr.gov.au</p>
        </div>

        <div className="h-2 bg-black mb-8"></div>

        <p className="text-md mb-8">Correct at time of publication.</p>
      </div>
    </div>
  );
}

export default Page;
