import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-[25px] mt-[50px]">
      <Link href={"/create-portal"}>
        <div className="w-[300px] h-[80px] bg-green-200 flex items-center justify-center text-[20px] font-[600]">
          Modal using createPortal
        </div>
      </Link>
      <Link href={"/dialog-element"}>
        <div className="w-[300px] h-[100px] bg-green-200 flex items-center justify-center text-[20px] font-[600]">
          Modal using dialog element
        </div>
      </Link>
    </main>
  );
}
