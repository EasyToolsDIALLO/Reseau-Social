import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import sharevideo from '../assets/share.mp4'
import logo from '../assets/logowhite.png'
import sanityClient from '../sanityClient'
import jwt_decode from "jwt-decode";

const Login = () => {
    const navigate = useNavigate()


    useEffect(()=>{
        /*global google*/
        function handleCallBack(response){
            
            const userObject = jwt_decode(response.credential)
            console.log( JSON.stringify(userObject))
            localStorage.setItem('user',JSON.stringify(userObject))
            const doc = {
                _id:userObject.sub,
                _type:"user",
                username:userObject.name,
                image:userObject.picture,
            }
            sanityClient.createIfNotExists(doc).then(()=>{navigate('/home',{ replace: true})})
        }

            google.accounts.id.initialize({
                client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
                callback: handleCallBack,
            })
            
             google.accounts.id.renderButton(
                document.getElementById("signInGoogle"),
                { theme: "filled_black", size: "large", text:"signin_with"}
            )

        
       
    },[navigate])

    
  return (
    <div className='flex justify-start items-center flex-col h-screen '>
        <div className='w-full h-full relative'>
            <video 
                src={sharevideo}
                type="video/mp4"
                loop
                controls={false}
                muted
                autoPlay
                className='w-full h-full object-cover'
            />

            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 bottom-0 bg-blackOverlay'>
                <div className='text-white items-center flex flex-col'>
                    <img src={logo} width='135px' height='135px' className='pl-3' alt="video fond ecran"/>
                    <div id="signInGoogle" className='mt-3'></div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Login