"use client";

import { useState } from "react";
import Modal from "./components/Modal";

export default function CreatePortalModalPage() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleOpenModal}>Open Modal</button>
      {isShowModal && (
        <Modal onClose={handleCloseModal}>
          <h2>Modal Content</h2>
          <p>This is a modal example using createPortal.</p>
        </Modal>
      )}
    </main>
  );
}
