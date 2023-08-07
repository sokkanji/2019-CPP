import { useRef } from "react";

type ModalType = {
  open: boolean;
};

export default function Modal({ open }: ModalType) {
  const ref = useRef<HTMLDialogElement>(null);

  const handleCloseModal = () => {
    ref.current?.close();
  };

  return (
    <dialog ref={ref} open={open}>
      <h2>Modal Content</h2>
      <p>This is a modal example using the dialog element tag.</p>
      <button onClick={handleCloseModal}>Close</button>
    </dialog>
  );
}
