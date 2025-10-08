import React, { useState } from 'react'
import logo from '../assets/Images/logo.png'
import { IoChevronDownOutline, IoChevronUpOutline, IoSearch } from "react-icons/io5";
function Header() {
 const [toggle, setToggle] = useState(false);
 const menu = [
    {
        id:1,
        name: 'Home'
    },
     {
        id:2,
        name: 'Movies'
    }, 
    {
        id:3,
        name: 'TV'
    },

    {
        id:4,
        name: 'Sports'
    },
    {
        id:5,
        name: 'News'
    } ,
    {
        id:6,
        name: 'Hubs'
    },
];


  return (
    <div className='flex justify-between items-center py-1 px-4 ' >
        <img src={logo} className="w-[50px]"/>
        <ul className='hidden  md:flex gap-4' >
            {menu.map((item)=>(
                <li className='text-gray-400 text-[18px]
                font-medium cursor-pointer hover:bg-gray-700
                hover:text-white px-3 pb-2 py-3
                rounded-md transition-all duration-500 ease-in-out'>{item.name}</li>
            ))}
        </ul>
        <div className='md:hidden relative'>
            <h2 onClick={() => setToggle(!toggle)} className='text-white px-3 pb-2 py-3 font-medium flex items-center
           bg-gray-700 rounded-md cursor-pointer'>Home{!toggle?
           <IoChevronDownOutline className='mt-1 ml-1'/>:
           <IoChevronUpOutline className='mt-1 ml-1'/>}</h2>
                    {toggle && (
                <ul className='absolute top-full text-center left-[-50%] mt-1 w-48 py-2 bg-gray-800 ml-auto mr-auto rounded-md shadow-lg z-50'>
                    {menu.map((item) => (
                        <li key={item.id} 
                            className='text-gray-400 text-[18px] font-medium cursor-pointer
                            hover:bg-gray-700 hover:text-white px-3 pb-2 py-3  rounded-md transition-all duration-300 ease-in-out'>
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}

           {toggle?
            <ul className='absolute bg-gray-700 w-[200px] text-center mt-3
            left-0 right-0 ml-auto mr-auto rounded-md px-10'>
              {menu.map((item,index)=>(
                <li 
                key={index}
                className='text-gray-400 text-[18px] cursor-pointer
                font-medium hover:bg-gray-700
                hover:text-white px-3 pb-2 py-3
                rounded-md transition-all duration-300 ease-in-out'>{item.name}</li>
            ))}  
            </ul> : null
           }

        </div>
        <div className='flex'>
            <IoSearch className='text-[35px] text-gray-300
            hover:bg-gray-700 px-[3px] pb-[2px] py-[2px]
            cursor-pointer rounded-md hover:text-white 
            transition-all duration-500 ease-in-out ' />
        </div>
    </div>
  )
}

export default Header