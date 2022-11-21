import React,{useState} from 'react'
import { urlFor,sanityClient } from '../sanityClient'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { MdDownloadForOffline} from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { BsFillArrowUpCircleFill} from 'react-icons/bs'

const PinForMasonry = ({pin: {postedBy,image,_id,destination}}) => {
  const [postHovered,setPosthovered] = useState(false)
  const [savingPost, setSavingpost] = useState(false)
  const navigation =useNavigate()

    return (
    <div clasname="m-2" style={{witdh:250}}>
       <div
        onMouseEnter={()=>setPosthovered(true)}
        onMouseLeave={()=>setPosthovered(false)}
        onClick={()=>navigation('pin-detail/${_id}')}
        className="relative cursor-zoom-in w-auto hover:shadow-xl overflow-hidden transition-all duration-500 ease-in-out"
        >
            <img className='rounded-lg w-full' alt="user-post" src={urlFor(image).url()} />
            {postHovered && 
                <div className='absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 py-2 z-50'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <a
                            href={`${image.asset.url}?dl=`}
                            download
                            onClick={(e)=> e.stopPropagation()}
                            className="bg-white w-9 h-9 rounded-full flex items-center 
                            justify-center text-dark text-xl opacity-75 hover:opacity-100 hover:shadow-xl outline-none"
                            >
                                <MdDownloadForOffline />
                            </a>
                        </div>
                    </div>
                </div>}
        </div>
    </div>
  )
}

export default PinForMasonry