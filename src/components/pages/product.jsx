import React from 'react'
import Prodprops from '../pages/prodprops'
import image from '../../assets/IMG_1228.JPG'
import image2 from '../../assets/IMG_1229.JPG'
import image3 from '../../assets/IMG_1242.JPG'
import image4 from '../../assets/IMG_1228.JPG'
import image5 from '../../assets/IMG_1242.JPG'
import image6 from '../../assets/IMG_5002.PNG'
import image7 from '../../assets/IMG_4980.JPG'
import image8 from '../../assets/IMG_4980.JPG'
import image9 from '../../assets/IMG_1228.JPG'
import image10 from '../../assets/IMG_1242.JPG'


const productData = [
{
  image: image,
  name: 'Sample Product',
  price: 50.99,
  description: 'This is a sample product description.',
  bg : "bg-blue-200",
  discount: '10% Off'
},
{
  image: image2,
  name: 'Sample Product 2',
  price: 75.49,
  description: 'This is another sample product description.',
  bg : "bg-green-200",
    discount: '15% Off'
},
{
  image: image3,
  name: 'Sample Product 3',
  price: 30.00,
  description: 'This is yet another sample product description.',
  bg : "bg-yellow-200",
  discount: '5% Off'
},
{
  image: image4,
  name: 'Sample Product 4',
  price: 120.00,
  description: 'This is a sample product description.',
  bg : "bg-red-200",
  discount: '20% Off'
},
{
  image: image5,
  name: 'Sample Product 5',
  price: 99.99,
  description: 'This is another sample product description.',
  bg : "bg-purple-200",
  discount: '30% Off'
},
{
  image: image6,
  name: 'Sample Product 6',
  price: 45.00,
  description: 'This is yet another sample product description.',
  bg : "bg-pink-200",
  discount: '25% Off'
},
{
  image: image7,
  name: 'Sample Product 7',
  price: 60.00,
  description: 'This is a sample product description.',
  bg : "bg-orange-200",
  discount: '15% Off'
},
{
  image: image8,
  name: 'Sample Product 8',
  price: 80.00,
  description: 'This is another sample product description.',
  bg : "bg-teal-200",
  discount: '5% Off'
},
{
  image: image9,
  name: 'Sample Product 9',
  price: 55.00,
  description: 'This is yet another sample product description.',
  bg : "bg-gray-200",
  discount: '20% Off'
},
{
    image: image10,
    name: 'Sample Product 10',
    price: 90.00,
    description: 'This is a sample product description.',
    bg : "bg-indigo-200",
    discount: '15% Off'
}

]
const product = () => {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 bg-gray-800 w-full h-auto p-5'>
      {productData.map((data, index) => (
        <Prodprops 
          key={index} 
          image={data.image} 
          name={data.name} 
          price={data.price} 
          description={data.description} 
            bg={data.bg}
            discount={data.discount}
        />
      ))}
      
    </div>
  )
}

export default product
