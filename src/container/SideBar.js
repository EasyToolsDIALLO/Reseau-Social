import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {RiHomeFill} from 'react-icons/ri'


import logo from '../assets/logo.png'

const SideBar = ({user,closeSideBar}) => {

  const handleCloseSideBar= ()=>{
    if(closeSideBar)
      closeSideBar(false)
  }

  const categories = [
    {name:"Animals"},
    {name:"WallPaper"},
    {name:"Photography"},
    {name:"Gaming"},
    {name:"Coding"}
  ]

  const isActiveStyle = 'flex items-center gap-3 px-5 font-extrabold border-r-2 border-black text-black transition-all duration-200 ease-in-out capitalize'
  const isNotActiveStyle = 'flex items-center gap-3 px-5 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'

  return (
    <div className='flex flex-col justify-between overflow-y-auto bg-white h-full min-w-220 hide-scrollbar shadow-md'>
      <div className='flex flex-col'>
        <Link to='/' className='flex px-5 gap-2 my-6 pt-1 w-190 items-center' onClick={handleCloseSideBar}>
          <img src={logo} alt="logo" className='w-full object-cover' />
        </Link>
        <div className='flex flex-col gap-5'>
          <NavLink to='/home' className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle} >
            <RiHomeFill fontSize={25}/>
            Home
          </NavLink>
          <h3 className="ml-3">Discover other options</h3>
          {categories.map(categorie => 
            (<NavLink to={`/categorie/${categorie.name}`} 
              className={({ isActive })=>(isActive?isActiveStyle:isNotActiveStyle)}
              onClick={handleCloseSideBar}
              key={categorie.name}
            >
            <RiHomeFill fontSize={25}/>
              {categorie.name}
            </NavLink>))}
        </div>
      </div>
      {user && 
        <Link to={`user-profil/${user._id}`}
          className="flex my-5 mb-3 gap-2 p-2 items-center bg-white mx-3 rounded-lg shadow-lg" 
          onClick={handleCloseSideBar}       
        >
          <img src={user.image} alt="profil" className='w-10 h-10 object-cover rounded-2xl shadow-sm' />
          <p>{user.username}</p>
        </Link>
      }
    </div>
  )
}

export default SideBar