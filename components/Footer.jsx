import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center md:w-1/2 md:ml-0">
            <Image
              src="https://www.dewr.gov.au/sites/default/files/images/2020-10/flags.png"
              alt="flag"
              width={100}
              height={27.3}
              aria-hidden="true"
            />
            <h1 className="text-xl md:text-2xl font-bold ml-4">Acknowledgement of Country</h1>
          </div>

          <div className="md:w-1/2 md:ml-auto">
            <div className="md:ml-[60px]">
              <p className="text-sm leading-relaxed">
                The Department of Employment and Workplace Relations acknowledges the
                traditional owners and custodians of country throughout Australia and
                acknowledges their continuing connection to land, water and community.
                We pay our respects to the people, the cultures and the elders past,
                present and emerging.
              </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <nav>
                <h2 className="text-sm font-semibold mb-2">Related Sites</h2>
                <ul className="list-none space-y-1">
                  <FooterLink href="https://www.pm.gov.au/">Australia.gov.au</FooterLink>
                  <FooterLink href="https://my.gov.au/">MyGov</FooterLink>
                  <FooterLink href="https://www.workforceaustralia.gov.au/">Workforce Australia</FooterLink>
                  <FooterLink href="https://www.servicesaustralia.gov.au/">Services Australia</FooterLink>
                  <FooterLink href="https://www.jobsandskills.gov.au/">Jobs and Skills in Australia</FooterLink>
                  <FooterLink href="https://www.servicesaustralia.gov.au/">Safe Work Australia</FooterLink>
                  <FooterLink href="https://www.fairwork.gov.au/">Fair Work Ombudsman</FooterLink>
                  <FooterLink href="https://www.fsc.gov.au/">Federal Safety Commissioner</FooterLink>
                  <FooterLink href="https://www.yourcareer.gov.au/">Your Career</FooterLink>
                  <FooterLink href="https://www.jobjumpstart.gov.au/">Job Jumpstart</FooterLink>
                  <FooterLink href="https://www.yourcareer.gov.au/learn-and-train/myskills">My Skills</FooterLink>
                  <FooterLink href="https://www.palmscheme.gov.au/">PALM Scheme</FooterLink>
                  <FooterLink href="https://www.usi.gov.au/">Unique Student Identifier (USI)</FooterLink>
                </ul>
              </nav>

              <nav>
                <h2 className="text-sm font-semibold mb-2">Using dewr.gov.au</h2>
                <ul className="list-none space-y-1">
                  <FooterLink href="https://www.dewr.gov.au/search">Search</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/privacy">Privacy</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/disclaimer">Disclaimer</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/copyright">Copyright</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/terms-use">Terms of Use</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/about-department/corporate-reporting/freedom-information-foi">Freedom of Information</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/sms-and-call-costs">SMS and Call Costs</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/how-use-site">Assistance using this site</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/translation-servcies">Translation Services</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/livestream-support">Livestream Support</FooterLink>
                </ul>
              </nav>

              <nav>
                <h2 className="text-sm font-semibold mb-2">Get in Touch</h2>
                <ul className="list-none space-y-1">
                  <FooterLink href="https://www.dewr.gov.au/about-department/contact-us">Contact</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/newsroom">DEWR Newsroom</FooterLink>
                  <FooterLink href="https://ministers.dewr.gov.au/">Ministers' Media Centre</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/about-department/contact-us/complaints">Complaint</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/using-site/social-media">Social Media</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/how-report-fraud">How to report fraud</FooterLink>
                </ul>
              </nav>

              <nav>
                <h2 className="text-sm font-semibold mb-2">About the Department</h2>
                <ul className="list-none space-y-1">
                  <FooterLink href="/about">About Us</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/about-department/work-us">Work with Us</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/about-department/corporate-reporting/corporate-plan">Corporate Plan</FooterLink>
                  <FooterLink href="https://www.dewr.gov.au/about-department/resources/organisation-chart-dewr">Organisation Chart</FooterLink>
                  <FooterLink href="https://www.facebook.com/AusGovDEWR" className="mt-3" icon="/facebook-icon.png">
                    Facebook
                  </FooterLink>
                  <FooterLink href="https://au.linkedin.com/company/department-of-employment-and-workplace-relations" className="mt-3" icon="/linkedin-icon.png">
                    LinkedIn
                  </FooterLink>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} className="text-sm hover:underline">
      {children}
    </Link>
  </li>
);

export default Footer;
