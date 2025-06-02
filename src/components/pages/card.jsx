import React from 'react'
import photo from '../../assets/Joy Areola.jpg'
import logo from '../../assets/logo.png'

const card = () => {
      const AlumniDetails = [
        {
            skill: "Product Management",
            image: photo,
            name: "Ifeoluwa Oyei",
            Company: "Product Manager, venture",
            logo: logo,
            bg:"bg-red-400"
        },
        {
            skill: "Full Stack",
            image: photo,
            name: "Victor",
            Company: "Kode10x Technology sols",
            logo: logo,
            bg:"bg-green-400"
        },

    ]

  return (
    <div className='w-full h-screen flex justify-center items-center gap-5 bg-gray-800'>
        {AlumniDetails.map((data, index) => (
              <div key={index} className={` w-96 h-120 ${data.bg} rounded-lg shadow-lg flex flex-col justify-center items-center`}>
        <div className='w-full h-1/2  rounded-t-lg flex justify-center items-center'>
            <img className='w-full h-full fit-contain' src= {data.image} alt="" />
        </div>
        <div className='w-full h-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold text-gray-800 mr-60'>{data.name}</h1>
          <p className='text-gray-600 mt-10 mr-30'>{data.Company} </p>
          <img className='w-[60px] h-[30px] mt-10 mr-60' src= {data.logo} alt="" />
          <button className='bg-white-500 text-black px-32 py-4 rounded-lg mt-4 border border-black'>Read More</button>
          </div>
      </div>

     
        ))}
    
    </div>
  )
}

export default card
