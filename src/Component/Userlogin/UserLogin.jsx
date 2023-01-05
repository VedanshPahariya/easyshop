import React from 'react'
import './UserLogin.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

    const navigate = useNavigate();

    const testUser = [
        { id: '1', password: 'test0001' },
        { id: '2', password: 'test0002' },
        { id: '3', password: 'test0004' },
        { id: '4', password: 'test0004' },
        { id: '5', password: 'test0005' }
    ]
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [text, settext] = useState("Please input details to login")


    const loginUser = async (e) => {
        e.preventDefault();
        (function () {
            let login = false;
            testUser.map((user) => {
                if (id === user.id) {
                    if (password === user.password) {
                        localStorage.setItem('id', id);
                        const x = localStorage.getItem('id')
                        console.log(`x: ${x}`);
                        login = true;
                        navigate('/');
                        return;
                    }
                }
            })
            if (login === false) {
                settext("invalid details")
                setTimeout(() => {
                    loginFailed();
                }, 1000);
                function loginFailed() {
                    settext("Please input details to login")
                }
            }
            return
        }())
    }




    return (
        <div className='user-login' >
            <p className='text'>{text}</p>
            <form action="" onSubmit={loginUser} method="post">
                <input type="text" name="id" id="id" placeholder='Enter Your Id' onChange={({ target }) => { setId(target.value) }} />
                <input type="password" name="password" id="password" placeholder='Enter Your password' onChange={({ target }) => { setPassword(target.value) }} />
                <button id='btn'>Submit</button>
            </form>
        </div>
    )
}

export default UserLogin