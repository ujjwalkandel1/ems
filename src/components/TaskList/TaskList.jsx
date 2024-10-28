import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[350px] p-9 bg-blue-400 rounded-xl'> 
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>28 Oct 2024 </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum inventore odio minus voluptate ut! </p>
        </div>

        <div className='flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl'> 
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>28 Oct 2024 </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum inventore odio minus voluptate ut! </p>
        </div>

        <div className='flex-shrink-0 h-full w-[350px] p-5 bg-green-400 rounded-xl'> 
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>28 Oct 2024 </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum inventore odio minus voluptate ut! </p>
        </div>

        <div className='flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl'> 
        <div className='flex justify-between items-center'>
            <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>High</h3>
            <h4 className='text-sm'>28 Oct 2024 </h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum inventore odio minus voluptate ut! </p>
        </div>
        
       
        
        
        
        
    </div>
  )
}

export default TaskList