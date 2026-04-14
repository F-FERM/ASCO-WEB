import Image from "next/image";
import Home from "./(home)/page";
import About from "./about/page";
import Service from "./service/page";
import Clients from "./clients/page";
import Careers from "./careers/page";
import Contact from "./contact/page";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Service />
      <Clients />
      <Careers />
      <Contact/>
    </main>
  );
}
