"use client";

import DialogModal, { useDialog } from "./DialogModal";

export default function DialogElementModalPage() {
  const { dialogRef, showModal } = useDialog();

  return (
    <main className="flex flex-col items-center justify-between mt-[50px]">
      <button className="bg-blue-200 p-[5px]" onClick={showModal}>
        Open Modal
      </button>
      <DialogModal dialogRef={dialogRef} />
    </main>
  );
}
