import { PropsWithChildren, useCallback, useEffect, useRef } from "react";
import './modal.scss';

type Props = PropsWithChildren<{ onClose?: () => void; closeOutClick?: boolean }>

const Modal = ({ children, onClose, closeOutClick = true }: Props) => {

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = '8px';
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.marginRight = '0';
    };
  }, []);

  const handler = useCallback(({ target }: Event) => {
    if (!ref.current?.contains(target as HTMLElement)) {
      onClose?.();
    }
  }, []);

  useEffect(() => {
    if (closeOutClick) {
      requestAnimationFrame(() => {
        document.addEventListener('click', handler);
      })
    }
    return () => document.removeEventListener('click', handler);
  }, [closeOutClick]);

  return (
    <div className="modal">
      <div className="modal-card" ref={ref}>
        <div className="modal-card-inner">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;