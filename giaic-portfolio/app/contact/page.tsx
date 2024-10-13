'use client'
import React from 'react'
import { FaAddressBook, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import { GrResume } from 'react-icons/gr';
import { MdContactPhone, MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  function ClickHere() {
    window.open("https://api.whatsapp.com/send/?phone=923182127256&text=Hello%21+I%27m+Hello&type=phone_number&app_absent=0", "_blank");
  }
  function sendEmail() {
    window.location.href = "mailto:farhansmit0318@gmail.com?subject=Hello&body=I%20would%20like%20to%20talk%20about...";
  }

  return (
    <div className=" text-white py-12">
      <h1 className='text-6xl m-10 font-bold text-center text-white   p-10'>Contect</h1>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Address */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-[#ba69c5]  p-5 rounded-full">
                <FaAddressBook />
              </span>
            </div>
            <h3 className="text-xl font-semibold">ADDRESS</h3>
            <a href="https://www.google.com/maps/place/Sindh,+Pakistan/@26.1389204,66.2476397,7z/data=!3m1!4b1!4m6!3m5!1s0x394cc06b6bc1942b:0x2e2056a9c78be82d!8m2!3d25.8943018!4d68.5247149!16zL20vMDc1bWI?entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D" target='blank' className="text-gray-400 mt-2 hover:text-[#ba69c5] hover:underline">Sindh, Pakistan</a>
          </div>

          {/* Contact Number */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-[#ba69c5]  p-5 rounded-full">
                <MdContactPhone />
              </span>
            </div>
            <h3 className="text-xl font-semibold">CONTACT NUMBER</h3>
            <p className="text-gray-400 mt-2 hover:text-[#ba69c5] hover:underline">+923182127256</p>
          </div>

          {/* Email Address */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-[#ba69c5]  p-5 rounded-full">
                <MdOutlineEmail />
              </span>
            </div>
            <h3 className="text-xl font-semibold">EMAIL ADDRESS</h3>
            <p className="text-gray-400 mt-2 cursor-pointer hover:text-[#ba69c5] hover:underline" onClick={sendEmail}>farhansmit0318@gmail.com</p>
          </div>

          {/* Download Resume */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-[#ba69c5]  p-5 rounded-full">
                <GrResume />
              </span>
            </div>
            <h3 className="text-xl font-semibold">DOWNLOAD RESUME</h3>
            <p className="text-gray-400 mt-2">
              <a href="#" target='blank' className="hover:text-[#ba69c5] hover:underline">resume link</a>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="sm:text-4xl text-2xl font-semibold">Have a Question?</h3>
          <a href="#" target='blank' className="text-[#ba69c5] sm:text-4xl text-2xl font-bold underline" onClick={ClickHere}>Click Here</a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center space-x-6 mt-28">
          <a href="https://www.linkedin.com/in/muhammad-farhan-09b7962a9/" target='blank' className="text-[#ba69c5] ">
            <FaLinkedin className="text-4xl" />
          </a>
          {/* <a href="#" target='blank' className="text-[#ba69c5] ">
            <FaTwitter className="text-4xl" />
          </a> */}
          <a href="https://www.facebook.com/profile.php?id=100053242969258" target='blank' className="text-[#ba69c5] ">
            <FaFacebook className="text-4xl" />
          </a>
          <a href="https://github.com/MUHAMMADFARHANHANIF" target='blank' className="text-[#ba69c5] ">
            <FaGithub className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
