import Image from 'next/image'
import React from 'react'
import heroSectionImage from '../asset/Untitled_design__4_-removebg.png'

const Page = () => {
  return (
    <React.Fragment>
      <div className=''>

{/* Hero Section */}
<h1 className='text-6xl m-10 font-bold text-center text-white   p-10'>About</h1>
<div className="h-[80vh] bg-gradient-to-r gap-6 from-purple-800 to-purple-950 flex flex-col md:flex-row items-center justify-center px-4">

{/* Image Section */}
<div className="w-96 h-96 md:w-80 md:h-80  my-10 border-4 flex items-center justify-center border-[#ae8eb3] rounded-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
  <Image
    src={heroSectionImage}
    alt="Hero Section"
    width={9000}
    height={9000}
    className="object-cover  w-[100%] h-[100%]"
    />
</div>


{/* Text Section */}
<div className="flex flex-col items-center md:items-start text-center md:text-left mb- md:mb-0 md:mr-8 space-y-6 animate-fade-in-up">
  <h1 className="text-4xl md:text-6xl font-bold text-white ">
    <span className="text-[#ba69c5]">Know How</span> I'M
  </h1>
  <p className="text-base md:text-lg font-medium text-[#ba69c5] max-w-xl">
  I am in GIAIC Batch 01 and also SMIT Batch 11 Student, I am focusing on the Generative AI, MERN stack and React Native for mobile app development. I am excited to enhance my skills in building dynamic web applications and engaging mobile experiences, preparing myself to create impactful projects in the tech industry.
  </p>
</div>
</div>


{/* Skills Section */}
<div className="bg-white py-10 px-4 md:px-10 mt-10">
<h2 className="text-3xl md:text-6xl font-bold text-purple-800 text-center mb-10 ">My Skills</h2>

<div className="grid mt-10 grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center text-center">
  {/* Skill - HTML */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-[#f06529] flex items-center justify-center">
      <span className="text-white text-2xl font-bold">HTML</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">HTML5</p>
  </div>

  {/* Skill - CSS */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-[#2965f1] flex items-center justify-center">
      <span className="text-white text-2xl font-bold">CSS</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">CSS3</p>
  </div>

  {/* Skill - JavaScript */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-[#f7df1e] flex items-center justify-center">
      <span className="text-black text-2xl font-bold">JS</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">JavaScript</p>
  </div>

  {/* Skill - TypeScript */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-[#3178c6] flex items-center justify-center">
      <span className="text-white text-2xl font-bold">TS</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">TypeScript</p>
  </div>

  {/* Skill - Firebase */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-[#FFCB2B] flex items-center justify-center">
      <span className="text-black text-2xl font-bold">FB</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">Firebase</p>
  </div>

  {/* Skill - ReactJS */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-[#61dafb] flex items-center justify-center">
      <span className="text-black text-2xl font-bold">React</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">ReactJS</p>
  </div>

  {/* Skill - Next.js */}
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
      <span className="text-white text-2xl font-bold">Next.js</span>
    </div>
    <p className="text-lg text-gray-700 mt-2">Next.js with TypeScript</p>
  </div>
</div>
</div>
















    </div>
    </React.Fragment>
  )
}

export default Page
