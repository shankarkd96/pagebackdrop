import React from 'react';
import { createPortal } from 'react-dom';
import styles from "./Modal.module.css";

export default function Modal(props) {
    const BackDrop=()=>{
        return <div className={`${styles.backDrop}`}></div>
    };
    const OverLay=(props)=>{
        return <div className={`${styles.overLay}`}>{props.children}</div>

    };
    const Modal=document.getElementById("modal-root");
  return (
    <div>
      {createPortal(<BackDrop/>,Modal)}
      {createPortal(<OverLay>{props.children}</OverLay>,Modal)}   
    </div>
  );
}
