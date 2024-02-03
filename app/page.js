import Image from "next/image";
import Hero from "@/components/hero";
import Collabs from "@/components/collabs";
import Support from "@/components/support";
import Features from "@/components/features";
import Benefit from "@/components/Benefit";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collabs />
      <Support />
      <Features />
      <Benefit />
    </main>
  );
}
