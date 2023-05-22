import React, { useState } from 'react';
import styles from "./Signupform.module.css";
export default function Signupfrom(props) {
    const [name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const [isvalid,setisvalid]=useState(true);

    const OnChangeName =(e)=>{
        setname(e.target.value);
    };
    const OnChangeEmail =(e)=>{
        setemail(e.target.value);
    };
    const OnChangePassword= (e)=>{
        setpassword(e.target.value);
    };

    const OnNameBlur=(e)=>{
        if(e.target.value.length<5){
        setisvalid(false);
        }
        else{
            setisvalid(true);
        }
    };
    const OnsubmitAction=(event)=>{
        event.preventDefault();
        const formvalues={name,password,email}
    
    
    props.togglesignupform(true);
    props.togglesigninform(true);
    console.log("submited",formvalues);
    };
  return (
    <div>
      <form 
      onSubmit={OnsubmitAction}
      className={`${styles.formcont}`}
      autoComplete='off'>
        <div className='form-group'>
            <label htmlFor='name' className={`${styles.lable}`}>Name</label>
            <input
            id='name'
            value={name}
            placeholder='Enter Your Name'
            className={`form-control`}
            onChange={OnChangeName}
            onBlur={OnNameBlur}/>
            <i className={! isvalid ?`${styles.showAlert}` : `${styles.alert}`}>Enter Valid data</i>
        </div>
        <div className='form-group'>
            <label htmlFor='email' className={`${styles.lable}`}>Email</label>
            <input 
            id='email'
            value={email}
            className={`form-control`}
            placeholder='Enter Your Id'
            onChange={OnChangeEmail}
            autoComplete='off'/>
        </div>
        <div className='form-group'>
            <lable htmlFor='password' className={`${styles.lable}`}>Password</lable>
            <input 
            id='password'
            value={password}
            className={`form-control`}
            placeholder='Enter Your Password'
            onChange={OnChangePassword}
            autoComplete='off'/>
        </div>
        <div className={`form-group`}>
            <button type='submit'>submit</button>
        </div>
      </form>
    </div>
  );
};
