import React from 'react'
import { Text } from 'react-font'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";



export default function Navbar() {
  return (
    <div className='w-full h-[10vh] bg-violet-500 flex justify-between pl-2 pr-3 LM425:justify-around items-center '>

<div>
<Text family='Radio Canada Big' className='text-3xl text-[#1F2937]' >Dine Outfits</Text>
</div>

 
<div className='block LM425:hidden'>
<CgMenuRight className='text-3xl'/>
</div>

<div className='hidden LM425:flex justify-around items-center list-none'>
    <li className='w-fit bg-slate-300 pr-4 pl-4 mr-2 ml-2 text-[#1F2937]'>Female</li>
    <li className='w-fit bg-slate-300 pr-4 pl-4 mr-2 ml-2 text-[#1F2937]'>Male</li>
    <li className='w-fit bg-slate-300 pr-4 pl-4 mr-2 ml-2 text-[#1F2937]'>Kids</li>
    <li className='w-fit bg-slate-300 pr-4 pl-4 mr-2 ml-2 text-[#1F2937]'>All Products</li>
</div>

<div className='hidden bg-green-500 w-[15%] LM425:flex justify-around items-center rounded-md'>

<CiSearch/>
    <input type="text" id='search' name='search'  placeholder='what your lookign for' className='outline-none rounded-md'/>
</div>



<div className='hidden w-[8%] bg-red-300 LM425:flex  justify-around items-center gap-3'>
<CgProfile className='text-3xl'/>
<FaShoppingCart className='text-3xl'    />
</div>


</div>
  )
}
