import Image from "next/image";
import Hero from "@/components/hero";
import Collabs from "@/components/collabs";

export default function Home() {
  return (
    <main className="max-w-[1440px] m-auto p-4">
      <Hero />
      <Collabs />
    </main>
  );
}
