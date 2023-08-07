import React from "react";
import ReactDOM from "react-dom";

type CreatePortalModalPropsType = {
  children: React.ReactNode;
  onClose: (arg: boolean) => void;
};

export default function CreatePortalModal({ children, onClose }: CreatePortalModalPropsType) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={() => onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
