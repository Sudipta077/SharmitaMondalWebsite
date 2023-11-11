import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Pricing = () => {

    const autoFill = (value) => {
        window.confirm("Please fill the data.");
    }
    document.title = "Sharmita Mondal | Pricing";

    return (
        <>
            <Navbar />
            <div className="container pricing heading">
                <h1 className="text-center mt-2">Pricing</h1>
                <p className="text-center">This is just for your understanding. Pricing may differ a little bit based on the work.</p>
            </div>

           <div className="price-container container-fluid">
                <div className="blackwhite">
                    <h3>Black & White (Pencil Sketch) </h3>
                    <div className="card-container d-flex flex-wrap">
                    <div className="card col-sm-12 sol-md-12 A4 m-1 col-lg-2">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">600/-</h5>
                            <p className="card-text ">Paper size - A4</p>
                            
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                            
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12A3 m-1 col-lg-3">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">700/-</h5>
                            <p className="card-text ">Paper size - A3</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A2 m-1 col-lg-4">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">900/-</h5>
                            <p className="card-text ">Paper size - A2</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A1 m-1 col-lg-5">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">1000/-</h5>
                            <p className="card-text ">Paper size - A1</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A0 m-1 col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">1500/-</h5>
                            <p className="card-text ">Paper size - A0</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    
                    </div>
                   
                </div>
                <div className="color my-5">
                <h3>Colour(Colour Pencil Sketch) </h3>
                    <div className="card-container d-flex flex-wrap">
                    <div className="card col-sm-12 sol-md-12 A4 m-1 one col-lg-2">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">750/-</h5>
                            <p className="card-text ">Paper size - A4</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A3 two m-1 col-lg-3">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">1000/-</h5>
                            <p className="card-text ">Paper size - A3</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A2 three m-1 col-lg-4">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">1200/-</h5>
                            <p className="card-text ">Paper size - A2</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A1 four m-1 col-lg-5">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">1800/-</h5>
                            <p className="card-text ">Paper size - A1</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    <div className="card col-sm-12 sol-md-12 A0 five m-1 col-lg-6">
                        <div className="card-body">
                            <h5 className="card-title fs-1 ">2500/-</h5>
                            <p className="card-text ">Paper size - A0</p>
                            <NavLink className="nav-link active" onClick={autoFill} to='/Order'>Order Now</NavLink> 
                        </div>
                    </div>
                    
                </div>
           </div>
        <h5 className="text-center mt-2 mb-5">You can order customized portraits too.</h5>
           </div>
        </>
    );
}
export default Pricing;