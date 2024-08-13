import React, { useRef } from 'react'
import Card from './Card'
import { data } from '../assets/data'

function Foreground() {
  const ref = useRef();
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full flex gap-10 flex-wrap p-[20px]'>
        {data.map((items, index)=>(
          <Card data={items} reference={ref}/>
        ))}
    </div>
    );
}

export default Foreground