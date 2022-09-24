import Link from "next/link";
import Hero from "./Hero";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Portfolio from "./Main/Portfolio";
import Pricing from "./Main/Pricing";
import Resume from "./Main/Resume";
import Services from "./Main/Services";
import Testimonials from "./Main/Testimonials";

export default function Main() {
  return (
    <>
      <Hero/>
      <About />
      <Contact />
      <Portfolio />
      <Pricing />
      <Resume />
      <Services />
      <Testimonials />
      <Link  href="#">
      <a
       
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      </Link>
    </>
  );
}
