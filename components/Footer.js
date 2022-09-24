import Link from "next/link";

export default function Footer() {
    return (
    <footer id="footer">
    <div className="container">
      <h3>SARA VIERA</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links">
        <Link href="#"><a  className="twitter"><i className="bx bxl-twitter"></i></a></Link>
        <Link href="#"><a  className="facebook"><i className="bx bxl-facebook"></i></a></Link>
        <Link href="#"><a  className="instagram"><i className="bx bxl-instagram"></i></a></Link>
        <Link href="#"><a  className="google-plus"><i className="bx bxl-skype"></i></a></Link>
        <Link href="#"><a  className="linkedin"><i className="bx bxl-linkedin"></i></a></Link>
      </div>
      <div className="copyright">
        &copy; Copyright <strong><span>SARA VIERA</span></strong>. All Rights Reserved
      </div>
      <div className="credits">

        Designed by <a href="#">SARA VIERA</a>
      </div>
    </div>
  </footer>
    );
}