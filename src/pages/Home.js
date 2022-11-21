import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, Outlet} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { userQuery } from '../utilsFunctions/sanityData'
import sanityClient from '../sanityClient'
import { SideBar} from '../container/index.js'
import logo from '../assets/logo.png'
import { setCurrentUser } from '../redux/features/CurrentUser'

const Home = () => {
  const [toggleSideBar,setToggleSideBar] = useState(false)
  const [user,setUser] = useState({})
  const userInfo = localStorage.getItem('user') !== "undefined"?JSON.parse(localStorage.getItem('user')): localStorage.clear();
  const scrollRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(()=>{
    const query = userQuery(userInfo.sub)
    sanityClient.fetch(query).then(data=>setUser(data[0]))
    dispatch(setCurrentUser(user))
  },[user,dispatch,userInfo])

  useEffect(()=>{
    scrollRef.current.scrollTo(0,0)
  },[])

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex fixed flex-initial h-screen'>
        <SideBar user={user && user} />
      </div>

      <div className='flex md:hidden flex-row '>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu fontSize={40} className="cursor-pointer" onClick={()=>setToggleSideBar(true)}/>
          <Link to='/'>
            <img src={logo} alt='logo' className='w-28 ml-2' />
          </Link>
          <Link to={`user-profil/${user._id}`}>
            <img src={user.image} alt='logo' className='w-9 h-9 object-cover ml-3 rounded-2xl shadow-md' />
          </Link>
        </div>
        {/*Mobile View*/}
        {toggleSideBar && 
          <div className='fixed w-3/5 bg-white h-full shadow-xl z-10 animate-slide-in overflow-hidden'>
            <div className='absolute w-full flex justify-end items-center p-2 '>
              <AiFillCloseCircle fontSize={35} className="cursor-pointer" onClick={()=>setToggleSideBar(false)}/>
            </div>
            <div className='w-full h-full'>
              <SideBar user={user && user} closeSideBar={setToggleSideBar}/>
            </div>
          </div>
        }
      </div>
  
      {/*We have made nested routes grace to Outlet that allow to navigate in this espace*/}
      <div className='md:ml-60 w-full h-screen overflow-y-scroll' ref={scrollRef}>
        <Outlet />
      </div>
      
    </div>
  )
}

export default Home