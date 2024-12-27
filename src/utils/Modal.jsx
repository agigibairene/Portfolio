/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useImperativeHandle, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import { Checkmark } from 'react-checkmark';

const Modal = forwardRef(({ message }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    openModal() {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
    closeModal() {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    },
  }));

  const handleClose = (event) => {
    event.preventDefault();
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return createPortal(
    <dialog className='dialogBox' ref={dialogRef}>
      <h4>{message} <Checkmark color="#00abf0"/></h4>
      <form method="dialog" onSubmit={handleClose}>
        <button className="dialog-btn">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
