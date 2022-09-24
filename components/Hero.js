import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-container">
        <h1>SARA VIERA</h1>
        <h2>I&apos;m a Professional Photographer In New York City</h2>
        <Link  href="#about">
        <a className="btn-scroll scrollto" title="Scroll Down">
          <i className="bx bx-chevron-down"></i>
        </a>
        </Link>
      </div>
    </section>
  );
}
