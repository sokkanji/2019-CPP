"use client";

import DialogModal, { useDialog } from "./DialogModal";

export default function DialogElementModalPage() {
  const { dialogRef, showModal } = useDialog();

  return (
    <div className="flex flex-col items-center justify-between pt-[50px]">
      <button className="w-[300px] h-[80px] bg-blue-200 text-[20px] p-[5px]" onClick={showModal}>
        Open modal using
        <br />
        <span className="font-bold">Dialog element</span>
      </button>

      <DialogModal dialogRef={dialogRef}>
        <p className="text-[20px] text-[bg-blue-400] font-bold">Dialog element Modal Content</p>
        <div className="flex flex-col gap-[5px] py-[15px]">
          <p>This is a modal example using the dialog element.</p>
          <p>You can use the developer tool to determine the current modal element location and properties.</p>
          <p>dialog 태그를 사용하여 만든 모달입니다.</p>
          <p>개발자 도구를 이용하여 현재 모달 엘리먼트 위치와 속성을 확인할 수 있습니다.</p>
        </div>
      </DialogModal>
    </div>
  );
}
