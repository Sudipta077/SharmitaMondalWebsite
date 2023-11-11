import React from "react";
import Navbar from "../components/Navbar.jsx";
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';
import s4 from '../images/s4.jpg';
import s5 from '../images/s5.jpg';
import s6 from '../images/s6.jpg';
import s7 from '../images/s7.jpg';
import s8 from '../images/s8.jpg';
import car1 from '../images/car1.png';
const Work = () => {
    document.title = "Sharmita Mondal | Works";
    return (
        <>
            <Navbar />
            <div className="works container mt-5 col-lg-12">
                <h1 className="text-center mb-3">My works</h1>
                <div className="card-container mt-5 d-flex flex-wrap justify-content-between">
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Pastel</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s7} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={s8} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Sketch</p>
                        </div>
                    </div>
                    <div className="card mx-1 mb-2 col-lg-2 col-sm-12">
                        <img src={car1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text text-center">Acrylic</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
}
export default Work;