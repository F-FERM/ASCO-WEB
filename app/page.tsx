import Image from "next/image";
import Home from "./(home)/page";
import About from "./about/page";
import Service from "./service/page";
import Clients from "./clients/page";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Service />
      <Clients />
    </main>
  );
}
