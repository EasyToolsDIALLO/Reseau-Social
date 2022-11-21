import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

import sanityClient from "../sanityClient"
import { feedQuery, searchQuery } from '../utilsFunctions/sanityData'
import { MasonryLayout,Spinner} from "./index"

const Feed = () => {
  const [loading,setLoading] = useState(false)
  const [pins, setPins] =useState(null)
  const {categoryId} = useParams()

  useEffect(()=>{
    setLoading(true)
    if(categoryId){
      const query = searchQuery(categoryId);

      sanityClient.fetch(query)
        .then(data=>{
          setPins(data);
          setLoading(false)
        })
    }else{
      sanityClient.fetch(feedQuery)
        .then(data=>{
          setPins(data);
          setLoading(false)
        })
    }

  },[categoryId])

  if(loading) 
    return <Spinner message="Loading" />

  return (
    <div className=''>
        {pins && <MasonryLayout pins={pins}/>}
    </div>
  )
}

export default Feed