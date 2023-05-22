//import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Signupfrom from './Signupform/Signupfrom';
import Signinform from './Signinform/Signinform';
import Modal from './Modal/Modal';
import React, {useState} from 'react';
function App() {

  const [showsignup,setshowsignup]=useState(false);
  const [showsignin,setshowsignin]=useState(false);

  const togglesignupform=(val)=>{
    setshowsignup((prevstate)=>{
      return !prevstate;
    });
  };
  const togglesigninform=(val)=>{
    setshowsignin((prevstate)=>{
      return !prevstate;
    });
  };

  const showModal = showsignin || showsignup;
  return (
    <div className='App'>
    <Header
    togglesignupform={ togglesignupform}
    togglesigninform={togglesigninform}/>
    {showModal && (
    <Modal>
      {showsignup && !showsignin &&(
        <Signupfrom
        togglesigninform={togglesigninform}
        togglesignupform={togglesignupform}/>
      )}
      {showsignin && !showsignup && (
        <Signinform
        togglesigninform={togglesigninform}
        togglesignupform={togglesignupform}/>
      )}</Modal>
    )}
    </div>
  );
};

export default App;
