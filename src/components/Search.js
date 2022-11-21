import React from 'react'
import { useSelector } from 'react-redux'

const Search = () => {
  const user = useSelector((state)=>state.user.current)
  return (
    <div>Search {user.username}</div>
  )
}

export default Search