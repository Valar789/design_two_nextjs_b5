import Link from "next/link";

export default function NavBar() {

    return (
        <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">

    <nav id="navbar" className="navbar">
      <ul>
        <li><Link href="#hero"><a className="nav-link scrollto active" >Home</a></Link></li>
        <li><Link href="#about"><a className="nav-link scrollto" >About</a></Link></li>
        <li><Link href="#resume"><a className="nav-link scrollto" >Resume</a></Link></li>
        <li><Link href="#services"><a className="nav-link scrollto" >Services</a></Link></li>
        <li><Link href="#portfolio"><a className="nav-link scrollto " >Portfolio</a></Link></li>
        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
          <ul>
            <li><Link href="#"><a >Drop Down 1</a></Link></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><Link href="#"><a >Deep Drop Down 1</a></Link></li>
                <li><Link href="#"><a >Deep Drop Down 2</a></Link></li>
                <li><Link href="#"><a >Deep Drop Down 3</a></Link></li>
                <li><Link href="#"><a >Deep Drop Down 4</a></Link></li>
                <li><Link href="#"><a >Deep Drop Down 5</a></Link></li>
              </ul>
            </li>
            <li><Link href="#"><a >Drop Down 2</a></Link></li>
            <li><Link href="#"><a >Drop Down 3</a></Link></li>
            <li><Link href="#"><a >Drop Down 4</a></Link></li>
          </ul>
        </li>
        <li><Link href="#contact"><a className="nav-link scrollto" >Contact</a></Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

  </header>
    );
}