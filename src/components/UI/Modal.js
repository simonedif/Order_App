//Modal to be Able to Use the overlays on the page

import React from 'react';
import ReactDom from 'react-dom';

import Style from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={Style.backdrop}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={Style.modal}>
      <div className={Style.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;