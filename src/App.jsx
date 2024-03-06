import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {

  const [users,setUsers] = useState([]);



  const handleFormSubmitData=(data)=>{
      setUsers([...users,data]);
      console.log(users);
  }


  const handleRemove=(id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }

  return (
   <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      <div className='container mx-28'>
        <Cards users={users} handleRemove={handleRemove}/>
        <Form handleFormSubmitData={handleFormSubmitData}/>

      </div>
   </div>
  )
}

export default App