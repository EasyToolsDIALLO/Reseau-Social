import React from 'react'
import { useOutletContext } from 'react-router-dom'

const PinDetails = () => {
  const {searchTerm,setSearchTerms,current} = useOutletContext()
  return (
    <div className=''>
        PinDetails 
    </div>
  )
}

export default PinDetails