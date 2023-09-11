import CreatePortalModalPage from "../components/CreatePortalContent";
import DialogElementModalPage from "../components/DialogContent";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center gap-[25px] mt-[50px]">
      <CreatePortalModalPage />
      <DialogElementModalPage />
    </main>
  );
}
