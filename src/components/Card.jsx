import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='cards relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt class/>
        <p className='mt-5 mb-6 leading-tight'>{data.desc}</p>
        <div className='footer absolute h-auto w-full left-0 bottom-0'>
            <div className='flex justify-between items-center py-3 px-7 mb-0 h-auto'>
                <h4>{data.filesize}</h4>
                <span className='w-6 h-6 rounded-[50%] bg-zinc-700 flex items-center justify-center'>
                  {data.close ? <IoIosClose/> : <HiOutlineDownload />}
                </span>
            </div>
            {
              data.tag.isopen ? ( 
              <div className={`tag w-full ${data.tag.tagcolor === "green" ? "bg-green-600" : "bg-orange-600"} py-4 h-10 flex justify-center items-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagtitle} </h3>
             </div>
             ):null
            }
            
        </div>
    </motion.div>
  )
}

export default Card