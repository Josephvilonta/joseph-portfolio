import React from 'react'
import MyImage from '../assets/Joseph.png'


const Hero = () => {
  return (
    <div className='text-white w-full py-16 px-4'id='home'>
        <div className=' max-w-[1240px]  mx-auto grid md:grid-cols-2 mt-5'>
            <img src={MyImage} alt="" className='w-[400px] mx-auto my-4 rounded-lg shadow-lg shadow-gray-600'/>
            <div className='flex flex-col justify-center ms-5'>
                <h1 className='mt-5 text-2xl text-sky-300 md:text-4xl sm:text-3xl font-bold'>JOSEPH U. VILONTA</h1>
                <h2 className='text-xl mt-2 text-gray-300'>UX/UI DESIGNER</h2>
                <p className='my-3'>As a recent BSIT graduate and front-end developer, I'm eager to kickstart my career in UI/UX design. With a passion for crafting engaging and intuitive user experiences, I bring a strong foundation in various IT areas, including proficiency in MS Office and computer servicing. Throughout my academic journey, I've honed my communication and problem-solving skills, essential for effective collaboration within interdisciplinary teams. I'm a quick learner, ready to apply my theoretical knowledge and hands-on experience to contribute to the success of an innovative organization as an entry-level UI/UX designer.</p>
               <a href='../assets/' download>
                 <button className='w-[200px] bg-sky-300 py-3 text-black font-medium rounded-md hover:bg-white hover:text-sky-300'>Download my CV</button>
               </a>
            </div>
        </div>
    </div>
  )
}

export default Hero