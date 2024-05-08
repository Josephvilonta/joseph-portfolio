import React from 'react'
import Css from '../assets/css-3.png'
import Html from '../assets/html.png'
import Balsamiq from '../assets/Balsamiq.png'
import protopie from '../assets/protopie.png'
import Figma from '../assets/Figma.png'
import proto from '../assets/proto.png'

const Skills = () => {
  return (
    <div className='w-full py-10 bg-white' id='skills'>
        <h1 className='text-center font-bold text-3xl text-sky-300 mb-[10%]'>SKILLS</h1>
        <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-5'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8  rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Css} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>CSS</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Balsamiq} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Balsamiq</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Html} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>HTML</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={protopie} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Protopie</h2>
               
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-14 mx-auto mt-[-3rem] bg-white' src={Figma} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>Figma</h2>
                
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={proto} alt="" />
                <h2 className='text-2xl font-bold text-center py-8'>proto.io</h2>
               
            </div>

        </div>
    </div>
  )
}

export default Skills