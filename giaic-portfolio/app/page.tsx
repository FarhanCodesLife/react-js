'use client'

import Image from 'next/image'
import React from 'react'
import HeroSectionImage from './asset/download.png'
import heroSectionImage from './asset/Untitled_design__4_-removebg.png'
import { FaAddressBook, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import { GrResume } from 'react-icons/gr';
import { MdContactPhone, MdOutlineEmail } from "react-icons/md";

import { motion } from 'framer-motion';

const Page = () => {
{/* <li>
                            <Link href="projects" className="block text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ba69c5] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">

                                Projects

                            </Link>
                        </li> */}

  function ClickHere() {
    window.open("https://api.whatsapp.com/send/?phone=923182127256&text=Hello%21+I%27m+Hello&type=phone_number&app_absent=0", "_blank");
  }
  function sendEmail() {
    window.location.href = "mailto:farhansmit0318@gmail.com?subject=Hello&body=I%20would%20like%20to%20talk%20about...";
  }

  return (
    <React.Fragment >
      <div className='bg-gradient-to-r from-[#1A202C] via-[#2D3748] to-[#4A5568]'>

      <div className="h-[100vh] flex flex-col md:flex-row items-center justify-center px-4 bg-gradient-to-r from-[#1A202C] via-[#2D3748] to-[#4A5568]">
      {/* Text Section */}
      <motion.div
        className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0 md:mr-8 space-y-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-white"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Hi There! 👋🏻
        </motion.h1>
        <motion.h1
          className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#a259ff] to-[#fccc63]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.0, ease: 'easeOut' }}
        >
          <p className="inline-block text-white">I'M</p> MUHAMMAD FARHAN
        </motion.h1>
        <motion.h1
          className="text-xl md:text-3xl font-medium text-[#fccc63]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Front-End Developer
        </motion.h1>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="w-60 h-60 md:w-80 md:h-80 border-4 border-gradient-to-r from-[#a259ff] to-[#fccc63] rounded-full overflow-hidden shadow-lg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        whileHover={{ scale: 1.1,opacity:0.5 }}
        

      >
        <Image
          src={HeroSectionImage}
          alt="Hero Section"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>



      <div className=''>

        {/* Hero Section */}
        <h1 className='text-6xl m-10 font-bold text-center text-white  '>About</h1>
      <div className="h-[80vh] bg-gradient-to-r gap-6 from-[#1A202C] via-[#2D3748] to-[#4A5568] flex flex-col md:flex-row items-center justify-center px-4">
       
       {/* Image Section */}
       <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease:'linear' }}
        whileHover={{ scale: 0.9,opacity:0.5 }}
       className="w-96 h-96 md:w-96 md:h-96  my-5 border-4 flex items-center justify-center border-[#ae8eb3] rounded-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
          <Image
            src={heroSectionImage}
            alt="Hero Section"
            width={9000}
            height={9000}
            className="object-cover rounded-xl  w-[80%] h-[80%]"
            />
        </motion.div>
      
       
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center py-10 md:text-left  md:mb-0 md:mr-8 space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white ">
            <span className="text-[#ba69c5]">Know How</span> I'M
          </h1>
          <p className="text-base md:text-lg font-medium text-[#ba69c5] max-w-xl">
          I am proud to be a student in GIAIC Batch 01 and SMIT Batch 11, where I am deeply focused on mastering Generative AI, the MERN stack, and React Native for mobile app development. With a passion for creating dynamic web applications and immersive mobile experiences, I am eager to sharpen my expertise and make a lasting impact through innovative projects in the tech industry          </p>
        </div>
</div>
        

      {/* Skills Section */}
      <div className="bg-gray-200 py-20 px-4 md:px-10  ">
        <h2 className="text-3xl md:text-6xl font-bold text-[#9b39a8] text-center mb-10 ">My Skills</h2>
        
        <div className="grid mt-20 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center text-center">
          {/* Skill - HTML */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-[#f06529] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">HTML</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">HTML5</p>
          </div>

          {/* Skill - CSS */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-[#2965f1] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">CSS</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">CSS3</p>
          </div>

          {/* Skill - JavaScript */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-[#f7df1e] flex items-center justify-center">
              <span className="text-black text-2xl font-bold">JS</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">JavaScript</p>
          </div>

          {/* Skill - TypeScript */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-[#3178c6] flex items-center justify-center">
              <span className="text-white text-2xl font-bold">TS</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">TypeScript</p>
          </div>

          {/* Skill - Firebase */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-[#FFCB2B] flex items-center justify-center">
              <span className="text-black text-2xl font-bold">FB</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">Firebase</p>
          </div>

          {/* Skill - ReactJS */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-[#61dafb] flex items-center justify-center">
              <span className="text-black text-2xl font-bold">React</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">ReactJS</p>
          </div>

          {/* Skill - Next.js */}
          <div className="flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Next.js</span>
            </div>
            <p className="text-lg text-gray-700 mt-2 font-bold">Next.js with TypeScript</p>
          </div>
        </div>
      </div>









    
            </div>

            <div className=" text-white py-12">
            <h1 className='text-6xl m-10 font-bold text-center text-white p-10'>Contact</h1>

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
    </div>

    </React.Fragment>
  )
}

export default Page
