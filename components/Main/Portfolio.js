import Image from "next/image";
import Link from "next/link";
import image1 from "public/img/portfolio/portfolio-1.jpg"
import image2 from "public/img/portfolio/portfolio-2.jpg"
import image3 from "public/img/portfolio/portfolio-3.jpg"
import image4 from "public/img/portfolio/portfolio-4.jpg"
import image5 from "public/img/portfolio/portfolio-5.jpg"
import image6 from "public/img/portfolio/portfolio-6.jpg"
import image7 from "public/img/portfolio/portfolio-7.jpg"
import image8 from "public/img/portfolio/portfolio-8.jpg" 
import image9 from "public/img/portfolio/portfolio-9.jpg" 


export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>



        <div className="row portfolio-container">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><Image src={image1} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <Link href="public/img/portfolio/portfolio-1.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><Image src={image2} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <Link href="public/img/portfolio/portfolio-2.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><Image src={image3} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <Link href="public/img/portfolio/portfolio-3.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><Image src={image4} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <Link href="public/img/portfolio/portfolio-4.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><Image src={image5} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <Link href="public/img/portfolio/portfolio-5.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img"><Image src={image6} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <Link href="public/img/portfolio/portfolio-6.jpg" ><a data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><Image src={image7} className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <Link href="public/img/portfolio/portfolio-7.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img"><Image src={image8}className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <Link href="public/img/portfolio/portfolio-8.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a></Link>
              <Link href="portfolio-details.html"><a  className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img"><Image src={image9}className="img-fluid" alt=""/></div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <Link href="public/img/portfolio/portfolio-9.jpg"><a  data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a></Link>
              <Link  href="portfolio-details.html"><a className="details-link" title="More Details"><i className="bx bx-link"></i></a></Link>
            </div>
          </div>

        </div>

      </div>
    </section>
    );
}