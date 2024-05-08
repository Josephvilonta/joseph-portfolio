import React from 'react'
import CRE1 from '../assets/CRE1.png'
import Appsdev1 from '../assets/Appsdev1.png'
import AGCOW1 from '../assets/AGCOW1.png'
import Dental1 from '../assets/Dental1.png'

const Projects = () => {
  return (
    <div className='w-full text-white p-5' id='projects'>
        <h1 className='text-2xl text-sky-300 font-bold'>PROJECTS</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 p-4 gap-5'>
           

           

            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 bg-white hover:scale-105 duration-200'>
            <a href="/"><img src={CRE1} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl text-black font-bold'>Digital Real Estate Services</h2>
                <p className='text-sm text-black'>Cordova Real Estate is a digital platform designed to streamline and enhance the process of buying, selling, and renting properties. It serves as a centralized hub where real estate agents can list properties, buyers can search for their dream homes, sellers can showcase their properties, and renters can find suitable accommodations.</p>
                <p className='text-l font-bold text-black'>Technology Use for Wire Framing/Sketch:</p>
                <span className='text-black'>Balsamiq, Figma </span>

                
            </div> 
            
            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 bg-white hover:scale-105 duration-200'>
            <a href='/'><img src={Appsdev1} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl text-black font-bold'>Travel Booking Platform</h2>
                <p className='text-sm text-black'>The Cordova Travel Guide is an online platform offering travelers detailed insights, recommendations, and practical advice to enhance their travel experiences in Cordova. It serves as a go-to resource for exploring attractions, accommodations, dining options, activities, local events, transportation, and other travel-related aspects in Cordova..</p>
                <p className='text-l font-bold text-black'>Technology Use:</p>
                <span className='text-black'>Figma</span>
            </div> 

            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 bg-white hover:scale-105 duration-200'>
            <a href='/'><img src={AGCOW1} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl text-black font-bold'>Blog/Social Media Platform</h2>
                <p className='text-sm text-black'>The church maintains a website that serves as an online hub for information about its mission, beliefs, leadership, ministries, events, and contact details The Almighty God Center of Worship (AGCW) is a spiritual community committed to honoring and glorifying God through prayer, worship, fellowship, and service. It provides a place of spiritual sanctuary and support for individuals seeking to deepen their faith and relationship with God.</p>
                <p className='text-l font-bold text-black'>Technology Use:</p>
                <span className='text-black'>Figma,</span>
            </div> 

            <div className='flex flex-col w-full shadow-md p-4 my-4 rounded-lg shadow-gray-500 bg-white hover:scale-105 duration-200'>
            <a href="/"><img src={Dental1} alt="" className='rounded-md' /></a>
                <h2 className='text-center text-2xl p-2 md:text-xl text-black font-bold'>Online Heatlh Services Platform</h2>
                <p className='text-sm text-black'>The Dental Clinic platform is a digital ecosystem tailored to meet the needs of dental clinics, practitioners, staff, and patients. It encompasses various software tools, applications, and services aimed at improving efficiency, patient care, and overall clinic management.</p>
                <p className='text-l font-bold text-black'>Technology Use:</p>
                <span className='text-black'>ReactJS, TailwindCss</span>
            </div> 
            

        </div>
    </div>
  )
}

export default Projects