import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { NavBar } from '../components';

const Pin = () => {
  const current = useSelector((state)=>state.user.current)
  const [searchTerm,setSearchTerms] = useState()

  return (
    <div className='ml-1 px-2 md:px-5'>
      <div className='bg-gray-50'>
        <NavBar search={searchTerm} setSearch={setSearchTerms} user={current}/>
      </div>
      <div className='h-full'>
        <Outlet context={{searchTerm,setSearchTerms,current}}/>
      </div>
    </div>
    
  )
}

export default Pin