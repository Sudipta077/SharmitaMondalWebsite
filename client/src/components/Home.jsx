import React from "react";
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3 from '../images/car3.png';
import car4 from '../images/car4.png';

import Navbar from "./Navbar";
import fb from '../images/facebook.png';
import instagram from '../images/instagram.png';
import mail from '../images/mail.png';

const Home = () => {
  document.title = "Sharmita Mondal | Home";
  return (
    <>
      <div className="container-fluid">
        <div className="home">
          <Navbar />
          <div className="about">
            <div className="img text-center">
            <div id="carouselExampleSlidesOnly" className="carousel slide container col-lg-3" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car4} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
            </div>
            <h1 className=" text-center mt-2">Hello,</h1>
            <p className="col-lg-8 col-sm-12 m-auto">I'm Sharmita Mondal, an artist who channels my emotions into my artwork. I also take on commission work, so if you're looking for custom art, feel free to reach out to me. I'm here to bring your creative visions to life.</p>
    
      <div className="social container ">
            <ul className="d-flex m-4  justify-content-evenly">
              <li><a href="https://www.facebook.com/profile.php?id=100086559124792" target="_blank">
                  <img src={fb} alt="" />
                </a></li>
                <li><a href="https://www.instagram.com/only_mondalsharmita_29/" target="_blank">
                  <img src={instagram} alt="" />
                </a></li>
                <li><a href="mailto:sharmitamondal916@gmail.com">
                  <img src={mail} alt="" />
                </a></li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </>

  );
}
export default Home;