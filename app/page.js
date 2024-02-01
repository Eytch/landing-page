import Image from "next/image";
import Hero from "@/components/hero";
import Collabs from "@/components/collabs";
import Support from "@/components/support";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collabs />
      <Support />
    </main>
  );
}
