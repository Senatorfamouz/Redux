import React from 'react'

const prodprops = ({image, name,price, description,bg, discount,}) => {
  return (
      <div>
            <div className={`h-135 w-75 ${bg} rounded-2xl flex flex-col justify-between items-center gap-[20px] relative  `}>
                <div className="bg-orange-700 rounded-xl absolute p-[5px] top-[10px] right-[10px]">{discount}</div>
                <div>
                    <img src={image} alt="Product" style={{height: "300px", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", }} />
                </div>
                
                <div className="w-full h-full flex flex-col justify-around pl-2">
                    <h2 className="text-2xl text-black" >{name}</h2>
                    <p className="text-gray-500">${price}</p>
                    <p className="text-gray-500">{description}</p>
                </div>
                
                <button className="w-[90%] text-[15px] cursor-pointer text-[#22249f] border-1 border-[#22249f] rounded-md mb-4 pt-[10px] pb-[10px] pr-[20px] pl-[20px] " >Add to Cart</button>
            </div>
      </div>

  )
}

export default prodprops
