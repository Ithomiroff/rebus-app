import { PropsWithChildren, useEffect } from "react";
import './modal.scss';

const Modal = ({ children }: PropsWithChildren) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal">
      <div className="modal-card">
        {children}
      </div>
    </div>
  )
};

export default Modal;