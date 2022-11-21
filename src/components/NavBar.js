import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { IoMdAddCircle,IoMdSearch } from 'react-icons/io'
import { useSelector } from 'react-redux'

const NavBar = ({search,setSearch}) => {
  const navigate = useNavigate()
  const user = useSelector((state)=>state.user.current)

  if(!user) return null;

  return (
    <div className='flex gap-2 md:gap-5 mt-5 pb-7 justify-center'>
        <div className='flex justify-start items-center w-4/5 px-2 rounded-md bg-white border-none outline-none focus-within:shadow-md'>
          <IoMdSearch fontSize={25} className='ml-1' />
          <input
            type="text" onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search"
            value={search}
            onFocus={()=>navigate('search')}
            className='p-2 w-full bg-white outline-none'
            />
        </div>
        <div className='flex gap-3 items-center justify-between'>
          <Link className='shadow-lg '>
            <IoMdAddCircle fontSize={45} color="green" />
          </Link>
          <Link className='ml-5'>
            <img src={user.image} alt="profil" className='w-10 h-10 rounded-3xl' />
          </Link>
          
        </div>
    </div>
  )
}

export default NavBar