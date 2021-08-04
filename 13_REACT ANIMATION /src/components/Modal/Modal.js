import React from "react";
import {  CSSTransition } from 'react-transition-group';
import "./Modal.css";

const modal = props => {
  const cssClasses = [
    "Modal",
    props.show === 'entering' ?
      "ModalOpen" :props.show==='exited'?  "ModalClosed":null
  ];
  const animationTiming = {
    enter: 300,
    exit: 2000
  };
  return (
    <CSSTransition
    in={props.show}
    timeout={animationTiming}
    mountOnEnter
      unmountOnExit
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
        appear: '',
        appearActive:''
      }}
    >
      
          <div className={cssClasses.join(' ')}>
              <h1>A Modal</h1>
              <button className="Button" onClick={props.closed}>
                Dismiss
              </button>
          </div>
       
     
    
      </CSSTransition>
  );
};

export default modal;