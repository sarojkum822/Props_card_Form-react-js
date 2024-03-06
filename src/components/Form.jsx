import React from 'react'
import { useForm } from 'react-hook-form';

const Form = ({handleFormSubmitData}) => {

  const {register,handleSubmit,reset} = useForm();

  const handleFormSubmit=(data)=>{
    handleFormSubmitData(data);
    reset();
  }
  
  
  return (
    <div className='flex gap-4 justify-center mt-10'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='gap-4 flex'>
        <input {...register('name')} type="text" className='text-xs font-semibold p-2 rounded-lg hover:bg-zinc-400 hover:text-black' name='name'  placeholder='Name' />
        <input {...register('email')} type="text" className='text-xs font-semibold p-2 rounded-lg hover:bg-zinc-400 hover:text-black' name='email' placeholder='Email' />
        <input {...register('image')} type="text" className='text-xs font-semibold p-2 rounded-lg hover:bg-zinc-400 hover:text-black' name='image' placeholder='img-url' />
        <input type="submit" className='bg-blue-900 py-1 px-2 py-2 text-white rounded-lg hover:bg-zinc-900 hover:text-white'/>
      </form>
    </div>
  )
}

export default Form