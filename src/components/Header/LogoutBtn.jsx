import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 text-white py-2 duration-200 hover:bg-slate-500 rounded-full shadow-white'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn