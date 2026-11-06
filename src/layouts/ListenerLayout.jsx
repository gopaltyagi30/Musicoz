import React from 'react'
import { Outlet } from 'react-router'
import ListenerNavbar from '../components/listeners/ListenerNavbar'

const ListenerLayout = () => {
  return (
    <div>
    <ListenerNavbar/>
      <Outlet/>
    </div>
  )
}

export default ListenerLayout
