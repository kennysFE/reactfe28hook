/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'

export default function UseRefDemo(props) {
    // const [number, setNumer] = useState(1);
    // const [userLogin, setUserLogin] = useState({username:'',password:''});

    const userLoginRef = useRef({userName:'',password:''});
    // console.log(userLogin);
    const handleChangeInput = (e) => {
        const {id, value} = e.target;
        userLoginRef.current[id]= value;
        console.log(userLoginRef.current);
    }

    const handleSubmit = (e) => {
        // stop reload browser events
        e.preventDefault();
        console.log(userLoginRef.current);
    }
  return (
    <form className='container' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
            <p>User Name</p>
            <input className='form-control' id='userName' onChange={handleChangeInput}/>
        </div>
        <div className='form-group'>
            <p>Password</p>
            <input className='form-control' id='password' onChange={handleChangeInput}/>
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Login</button>
        </div>
    </form>
  )
}
