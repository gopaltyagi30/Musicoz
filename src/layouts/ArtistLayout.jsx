import React from 'react'
import { Outlet } from 'react-router'

const ArtistLayout = () => {
  return (
    <div>
      I am artist
      <Outlet/>
    </div>
  )
}

export default ArtistLayout
