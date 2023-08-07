"use client";

import Modal from "./Modal";
import { useState } from "react";

export default function Home() {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setIsShowModal(true)}>Open Modal</button>
      <Modal open={isShowModal} />
    </main>
  );
}
