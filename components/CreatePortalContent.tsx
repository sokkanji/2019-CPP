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
    <div className="flex flex-col items-center justify-between pt-[50px]">
      <button className="w-[300px] h-[80px] bg-green-200 text-[20px] p-[5px]" onClick={handleOpenModal}>
        Open modal using
        <br />
        <span className="font-bold">CreatePortal</span>
      </button>

      {isShowModal && (
        <Modal onClose={handleCloseModal}>
          <p className="text-[20px] font-bold">CreatePortal Modal Content</p>
          <div className="flex flex-col gap-[5px] py-[15px]">
            <p>This is a modal example using createPortal.</p>
            <p>You can use the developer tool to determine the current modal element location and properties.</p>
            <p>dialog 태그를 사용하여 만든 모달입니다.</p>
            <p>개발자 도구를 이용하여 현재 모달 엘리먼트 위치와 속성을 확인할 수 있습니다.</p>
          </div>
        </Modal>
      )}
    </div>
  );
}
