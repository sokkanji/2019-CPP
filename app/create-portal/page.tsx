"use client";

import { useState } from "react";
import Modal from "./CreatePortalModal";

export default function CreatePortalModalPage() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <main className="flex flex-col items-center justify-between pt-[50px]">
      <button className="bg-green-200 p-[5px]" onClick={handleOpenModal}>
        Open Modal
      </button>

      {isShowModal && (
        <Modal onClose={handleCloseModal}>
          <p className="text-[20px] font-[500]">CreatePortal Modal Content</p>
          <p>This is a modal example using createPortal.</p>
        </Modal>
      )}
    </main>
  );
}
