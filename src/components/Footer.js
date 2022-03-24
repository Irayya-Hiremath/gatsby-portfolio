import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
        <div className="mainFooter mt-lg-5  pt-5 px-3  mt-5 text-light overflow-hidden " >
                <Container className="container desktopFooter" >
                    <div className="row pb-lg-2 my-lg-3 m-auto">

                        <div className="col-lg-6 col-12">
                            <h3 className='footerHeader mb-3'>Irayya Hiremath</h3>
                            <div>
                                <div className="footerContact mb-5 justify">
                                I am Front-End Developer from Hubbali, Karanataka. <br/> 
                                I always make websites that have unique designs and also has a good performance rate.
                                </div>
                            </div>
                        </div>

                        {/***************************************** column 1 **********************************************/}
                        <div className="col-lg-3 col-6" >
                            <h3 className='footerHeader mb-3'><span className='halfBorder pb-3'>Useful Links</span></h3>
                            <ul className="list-unstyled px-5 mx-5">

                                <li><Link className='footerLink' to="/">Home</Link></li>
                                <li><Link className='footerLink' to="/about">About</Link></li>
                                <li><Link className='footerLink' to="/project">Project</Link></li>
                                <li><Link className='footerLink' to="/contact">Contact</Link></li>
                            
                            </ul>
                        </div>

                        {/***************************************** column 2 **********************************************/}
                        <div className="col-lg-3 ps-lg-5 col-6" >
                            <h3 className='footerHeader ps-2 mb-3'><span className='halfBorder pb-3'>Contact Info</span></h3>
                            <ul className="list-unstyled  px-5 ">
                                <li className='footerLink'>+91 8951629431</li>
                                <li><Link className='footerLink' to="/campus">ihiremath1991@gmail.com</Link></li>
                                <li><Link className='footerLink' to="campus/">Hubballi</Link></li>
                                <li><Link className='footerLink' to="/campus">Karnataka</Link></li>

                            </ul>
                        </div>

                        {/***************************************** column 2 **********************************************/}
                        {/* <div className="col-lg-2 col-5 " >
                            <h3 className='footerHeader ps-0 mb-3'><span className='halfBorder pb-3'>Social Links</span></h3>
                            <ul className="list-unstyled  px-5 mx-5">
                                <li className='footerLi'><Link className='footerLink' to="/https://github.com/Irayya-Hiremath"> Github</Link></li>
                                <li className='footerLi'><Link className='footerLink' to="/"> Twitter</Link></li>
                                <li className='footerLi'><Link className='footerLink' to="/"> Linkedin</Link></li>
                                <li className='footerLi'><Link className='footerLink' to="/">Youtube</Link></li>
                                <li className='footerLi'><Link className='footerLink' target="_blank" > Location</Link></li>

                            </ul>
                        </div> */}
                        
                    </div>

    
                </Container>
                <div className="footerCopyright row " >
                <div className="text-center py-1" > 
                     Copyright &copy;{new Date().getFullYear()} Irayya Hiremath.All Rights Reserved | Designed by Irayya
                </div>
            </div>
         </div> 
  )
}

export default Footer