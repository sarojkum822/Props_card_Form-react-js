import React from 'react'
import Card from './Card';




const Cards = ({users,handleRemove}) => {
  return (
    <div className='w-full h-96 bg-red-100 rounded-lg flex flex-wrap justify-center gap-4 p-4 max-h-96 overflow-auto'>
          {users.map((item,index)=>{
            return <Card user={item} key={index} handleRemove={handleRemove} id={index}/>
          })}  
    </div>
  )
}

export default Cards