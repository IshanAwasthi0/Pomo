'use client';

import { handleLogout } from "../actions/taskActions"

const LogoutButton = () => {
    return (
        <button 
        onClick={handleLogout}
        className='font-lobster text-3xl text-brown absolute top-10 right-10'>
        Logout</button>
    )
}

export default LogoutButton