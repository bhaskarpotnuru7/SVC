import "./index.css";
import { Link} from "react-router-dom";
import Nav from "../nav/nav";

const Svc = () => {

  return (
    <>
    <Nav />
    <div className = "container">
      <div className = "row">

        <div className = "col-12 top-container">
          <img src = "Assets/images/main_banner.jpg" className = "main-banner-image-small" alt = "Real Estate" />
          <div className = "top-container-text">
          <h1 className = "heading">Easy way to find a perfect property</h1>
          <img src = "Assets/images/brr_nivas_address.jpg" className = "brr-nivas-address" alt = "BRR Nivas"/>  
          </div>
          <img src = "Assets/images/main_banner.jpg" className = "main-banner-image-large" alt = "Real Estate" />  
        </div>

        <div className = "col-12 middle-container">
          <Link to = "/bedroom-designs" className = "link-item text-dark">
              <div className = "card-container shadow m-3">
                  <h2 className = "card-heading">BED ROOM</h2>
                  <img src = "Assets/images/main_br.jpg" className = "card-image" alt = "Bedroom"/>     
              </div>
          </Link>
            
          <Link to = "/livingroom-designs" className = "link-item text-dark">
            <div className = "card-container shadow m-3">
                <h2 className = "card-heading">LIVING ROOM</h2>
                <img src = "Assets/images/main_lr.jpg" className = "card-image" alt = "Bedroom"/>     
            </div>
          </Link>

          <Link to = "/kitchenroom-designs" className = "link-item text-dark">
            <div className = "card-container shadow m-3">
                <h2 className = "card-heading">KITCHEN</h2>
                <img src = "Assets/images/main_kitchen.jpg" className = "card-image" alt = "Bedroom"/>     
            </div>
          </Link>

          <Link to = "/washroom-designs" className = "link-item text-dark">
            <div className = "card-container shadow m-3">
                <h2 className = "card-heading">WASH ROOM</h2>
                <img src = "Assets/images/main_wr.jpg" className = "card-image" alt = "Bedroom"/>     
            </div>  
          </Link>
      </div>    


        <div className = "col-12 estate-container shadow">
          <div className = "estate-lg-details">
          <h1>Find your best Real Estate</h1>
          <p>We provide a complete service for the sale, purchase of real estate.</p>
          <a href="https://api.whatsapp.com/send?phone=7989209030">
          <button className = "contact-us-btn-1 bg-primary d-none d-lg-block">CONTACT US</button>
          </a>
          </div> 
          <img src = "Assets/images/banner_2.jpg" alt = "Real Estate"/>
          <button className = "contact-us-btn-2 d-lg-none bg-primary">CONTACT US</button>  
        </div>
        
        <div className = "footer-container ml-5">

            <div className = "footer-address text-center mr-5">
              <img src = "Assets/images/brr_nivas_address.jpg" className = "footer-address-image " alt = "BRR Nivas" />
            <div className = "d-none d-lg-block">
              <ul className = "social-media-container d-flex ml-5 ">
                <li><Link to = "/facebook" className = "link-item"><i className="fa-brands fa-facebook social-media-icon "></i></Link></li>
                <li><Link to = "/twitter" className = "link-item"><i className="fa-brands fa-twitter social-media-icon"></i></Link></li>
                <li><Link to = "/instagram" className = "link-item"><i className="fa-brands fa-instagram social-media-icon insta-icon"></i></Link></li>
                <li><Link to = "/linkedin" className = "link-item"><i className="fa-brands fa-linkedin social-media-icon"></i></Link></li>
              </ul>
            </div>
              </div>

          <div className = "d-flex">
            <ul className = "school-and-college-container">
              <h1>School & Colleges</h1>
              <li>Kendriya Vidyalaya - 1.5km</li>
              <li>Sri Chaitanya School - 1.6km</li>
              <li>Fort City School - 3.1km</li>
              <li>Raghu Engineering College - 14.5km</li>
              <li>MVGR College of Engg. - 7.1km</li>
            </ul>
            
            <ul className = "railway-and-busstand-container">
              <h1>Railway & Bus Stand</h1>
              <li>Vizianagaram Railway Station - 1.5km</li>
              <li>Vizianagaram RTC Complex - 2.4km</li>
            </ul>
            </div>

            <div className="d-lg-none">
              <ul className = "social-media-container d-flex justify-content-center">
                <li><Link to = "/facebook" className = "link-item"><i className="fa-brands fa-facebook social-media-icon "></i></Link></li>
                <li><Link to = "/twitter" className = "link-item"><i className="fa-brands fa-twitter social-media-icon"></i></Link></li>
                <li><Link to = "/instagram" className = "link-item"><i className="fa-brands fa-instagram social-media-icon insta-icon"></i></Link></li>
                <li><Link to = "/linkedin" className = "link-item"><i className="fa-brands fa-linkedin social-media-icon"></i></Link></li>
              </ul>
        </div>

        </div>

        <div className = "col-12 copy-right text-center">
        <p>@2023 . All Copy rights Reserved</p>
        </div>
      </div>
    </div>
    </>  
  );
};

export default Svc