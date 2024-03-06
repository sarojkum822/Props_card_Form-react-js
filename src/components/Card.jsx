import React from 'react'

const Card = ({user,handleRemove,id}) => {

  const removeCard=()=>{
    handleRemove(id);
  }

  return (
    <>
     <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
       <div className='w-full h-[16vw] rounded-lg bg-blue-900 overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} alt="" />
       </div>
       <h1 className='mt-2 text-xl font-semibold'>{user.name}</h1>
       <h1 className='opacity-50 text-xs font-semibold'>{user.email}</h1>
       <p className='mt-2 text-center text-xs leading-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis esse non eius!</p>
       <button className='pl-2 pr-2 mt-2 bg-red-900 text-white text-4 rounded-lg hover:bg-red-200 hover:text-black' onClick={removeCard}>Remove it</button>
    </div>
  
    </>
  )
}

export default Card