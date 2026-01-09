
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useImperativeHandle, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';

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
    <dialog ref={dialogRef} className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="checkmark-wrapper">
            <svg className="checkmark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <div className="modal-body">
          <h2>{message}</h2>
        </div>
        <button onClick={handleClose} className="modal-button">
          Close
        </button>
      </div>
    </dialog>,
    document.getElementById("modal") || document.body
  );
});

export default Modal;