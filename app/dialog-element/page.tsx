"use client";

import DialogModal, { useDialog } from "./DialogModal";

export default function DialogElementModalPage() {
  const { dialogRef, showModal } = useDialog();

  return (
    <main className="flex flex-col items-center justify-between pt-[50px]">
      <button className="bg-blue-200 p-[5px]" onClick={showModal}>
        Open Modal
      </button>

      <DialogModal dialogRef={dialogRef}>
        <p className="text-[20px] font-[500]">Dialog element Modal Content</p>
        <p>This is a modal example using the dialog element tag.</p>
      </DialogModal>
    </main>
  );
}
