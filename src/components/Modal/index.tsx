import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import './modal.scss';

type Props = PropsWithChildren<{ onClose?: () => void }>

const Modal = ({ children, onClose }: Props) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handler = useCallback(({ target }: Event) => {
    if (!ref.current?.contains(target as HTMLElement)) {
      onClose?.();
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      document.addEventListener('click', handler);
    })
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="modal">
      <div className="modal-card" ref={ref}>
        {children}
      </div>
    </div>
  )
};

export default Modal;