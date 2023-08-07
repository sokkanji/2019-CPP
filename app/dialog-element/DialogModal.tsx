import { RefObject, useRef } from "react";

type DialogModalPropsType = {
  dialogRef: RefObject<HTMLDialogElement>;
  children: React.ReactNode;
};

export default function DialogModal({ children, dialogRef }: DialogModalPropsType) {
  const handleCloseModal = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog ref={dialogRef}>
      <form method="dialog" className="border-[2px] p-[10px]">
        {children}
        <button className="bg-blue-300 mt-[10px] p-[5px]" onClick={handleCloseModal}>
          Close
        </button>
      </form>
    </dialog>
  );
}

export function useDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = () => dialogRef.current?.showModal();
  const closeModal = () => dialogRef.current?.close();

  return { dialogRef, showModal, closeModal };
}
