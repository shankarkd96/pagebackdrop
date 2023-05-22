import React, { useState } from 'react';
import styles from "./signinform.module.css";

export default function Signinform(props) {
    const[email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const OnChangeEmail=(e)=>{
        setemail(e.target.value);
    };
    const OnChangePassword=(e)=>{
         setpassword(e.target.value);
    };
    const OnsubmitAction=(event)=>{
        event.preventDefault();
        const formvalues={email,password};
        if (email.trim().includes("@") && password.length>4){return;}
        props.togglesigninform(true);
        console.log("submited",formvalues);
    };
  return (
    <div>
      <form onSubmit={OnsubmitAction}
      className={`${styles.formcont}`}
      autoComplete='off'>
        <div className='form-group'>
            <lable htmaFor='email' className={`${styles.lable}`} >Email</lable>
            <input
            id='email'
            value={email}
            placeholder='Enter Your Email Id'
            autoComplete='off'
            type='email'
            onChange={OnChangeEmail}
            className={`form-control`}/>
        </div>
        <div className='form-group'>
            <lable htmlFor="password" className={`${styles.lable}`}>Password</lable>
            <input 
            id='password'
            value={password}
            placeholder='Enter Your Password'
            type='password'
            onChange={OnChangePassword}
            className={`form-control`}/>
            </div>
            <div className='form-group'>
              <button type='submit'>submit</button>
            </div>
      </form>
    </div>
  );
};
