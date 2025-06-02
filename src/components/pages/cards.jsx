import React from 'react'
import Cardprops from '../pages/cardprops'
import cac from '../../assets/logo.png'
import photo from '../../assets/Joy Areola.jpg'
import photo2 from '../../assets/pics 1.jpg'
import photo3 from '../../assets/pics2.webp'
import photo4 from '../../assets/pics3.jpeg'
import photo5 from '../../assets/pics 5.webp'
 
const CardsDetails = [
    
    {
        skill: "Full Stack",
        image: photo,
        name: "Victor",
        Company: "Kode10x Technology sols",
        logo: cac,
        bg:"bg-green-400"
    },
    {
        skill: "Product Management",
        image: photo2,
        name: "Ifeoluwa Oyei",
        Company: "Product Manager, venture",
        logo: cac,
        bg:"bg-red-400"
    },
    {
        skill: "Data Science",
        image: photo3,
        name: "Joy Areola",
        Company: "Data Analyst, Google",
        logo: cac,
        bg:"bg-blue-400"
    },
    {
        skill: "UI/UX Design",
        image: photo4,
        name: "John Doe",
        Company: "UI Designer, Apple",
        logo: cac,
        bg:"bg-yellow-400"
    }
    ,
    {
        skill: "Software Engineering",
        image: photo5,
        name: "Jane Smith",
        Company: "Software Engineer, Microsoft",
        logo: cac,
        bg:"bg-purple-400"
    }
    
]

function cards() {
  return (
    <div className= 'flex flex-wrap justify-center items-center gap-5 bg-gray-800 w-full h-200vh'>
       {CardsDetails.map((data, index) => (<Cardprops key={index} skill={data.skill} image={data.image} name={data.name} Company={data.Company} logo={data.logo} bg={data.bg}/>))}
    </div>
  )
}

export default cards
