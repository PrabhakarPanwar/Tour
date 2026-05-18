import React, { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';

function AdminLogin() {
    const [name, setName] = useState(null)
    const [pwd, setPwd] = useState(null)
    let obj = { name, pwd }

    async function sendData() {
        const res = await axios.post("http://localhost:8000/admin", obj)
        if (!res.data.success) {
            return toast.error(res.data.msg)
        }
        toast.success(res.data.msg)
        setTimeout(() => (
            window.location.href = "/admin/dashboard"
        ), 2000)
    }
    return (
        <div className='flex flex-col gap-3'>
            <h1 className='text-center'>Admin Login Page</h1>
            <input type="text" onChange={(i) => setName(i.target.value)} placeholder='Admin UserName' />
            <input type="text" onChange={(i) => setPwd(i.target.value)} placeholder='Password' />
            <button type="submit" onClick={sendData}>submit</button>
        </div>
    )
}

export default AdminLogin