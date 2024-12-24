/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import{ useImperativeHandle, useRef, forwardRef } from 'react';

const Modal = forwardRef(({ message }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    openModal() {
      dialogRef.current.showModal();
    },
    closeModal() {
      dialogRef.current.close();
    },
  }));

  return (
    <dialog ref={dialogRef}>
      <p>{message}</p>
      <button onClick={() => dialogRef.current.close()}>Close</button>
    </dialog>
  );
});

export default Modal;
