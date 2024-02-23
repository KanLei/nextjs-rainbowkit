import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen p-0 flex-col items-center justify-center">
      <ConnectButton />
    </main>
  );
}
