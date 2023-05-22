import React from 'react';
import styles from "./Header.module.css";
export default function Header(props) {
  const Onsignupclick=(event)=>{
    props.togglesignupform(true);
  };
  const Onsigninclick=(event)=>{
    props.togglesigninform(true);
  };
  return (
    <div className={`${styles.headercont}`}>
      <ul>
        <li>
            <a>Home</a>
        </li>
        <li>
            <button onClick={Onsignupclick}>Sign In</button>
        </li>
        <li>
            <button onClick={Onsigninclick}>Log In</button>
        </li>
        <li>
          <a>About</a>
        </li>
      </ul>
    </div>
  );
};
