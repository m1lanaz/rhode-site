import Image from "next/image";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="relative">
        <Cards />
      </section>
      <section className="relative mt-8 px-4">
        <div className="w-full ">
          <p className="text-4xl md:text-5xl lg:text-6xl leading-10 tracking-wide pb-10 md:pb-3">
            <span className="block md:hidden">BEST SELLERS</span>
            <span className="hidden md:block">BEST-<br />SELLERS</span>
          </p>
        </div>
      </section>
    </main>
  );
}
