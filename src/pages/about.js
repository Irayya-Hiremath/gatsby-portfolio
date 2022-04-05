import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap'
import cv from '../images/irayyacv2022.pdf'


function about() {
  return (
    <Layout>
      <div className=" container my-5">
            <div className=" container row m-auto">
              <div className="col-lg-5 read_about col-12 order-lg-1 order-2 "></div>
                 <div className=" col-lg-7 col-12 order-lg-2 order-1 ">
                      <div className="aboutText">
                            <p style={{fontSize:'2.5rem'}}>Hello,</p>
                            <p style={{fontSize:'2rem'}}>Let me introduce myself</p>
                            <p  style={{fontSize:'1.5rem',textAlign:'justify'}}>I Am Irayya Hiremath currently working as a Front-End Developer. I am a Mechanical Engineering graduate from Hulkoti, Gadag. Started as a Design Engineer at BLH H-Tech PVT LTD, Hubbali in an IoT team for the SPOUT project. Prototype development of an Alcohol inventory system developed using IOT technology, I was responsible for parts designing of Spout using Catia V5.<br/>
                            After completing the SPOUT prototype, Continued in the same organization as a customer-facing Project Coordinator/Technical consultant for web and mobile Applications Under IT Dept. In that role, I was responsible for gathering Customer requirements and signoff, Designing the wireframes and application flows. Collaborating with Sales, development, and testing team to complete the application implementation. Customer Demo and Presentation.<br/>
                            After that I found interest in development and coding then I joined the organization Sathvik Softech, Hubbali. where I had completed my course and got an opportunity for an internship and worked many small projects learned new technology with real time projects. include designing and developing UI for the websites and integrating it with the back-end system.</p>
                      </div>

                      <div className="button_box p-3">
                        <a href={cv}> <Button className="button"> Download CV</Button>  </a>
                      </div>
                </div>
             </div>
          </div>
          

      <div className=" aboutsection w-75 container p-3 m-auto mt-5">
           <div className="educatioinSection mt-5 ">
                <h1>MY SKILLS</h1>
                <div className="education mt-5 row">
                  <div className="col-lg-3 col-12 mb-3">
                  <h2>WebTechnologies</h2>

                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex ">
                  <h6>HTML</h6>
                  <h6>CSS</h6>
                  <h6>JavaScript</h6>

                  </div>
                  <div className="col-3">
                  <h2>FrameWorks/Libries</h2>

                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex justify-content-spacebetween flex-wrap">
                  <h6>React JS</h6> 
                  <h6>GatsBy</h6> 
                  <h6>React Bootstrap</h6> 
                  <h6>Bootstrap</h6> 
                  <h6>Tailwind css</h6>
                  <h6>Ant D</h6> 
                  <h6>Next JS</h6> 

                  </div>
                  <div className="col-lg-3 col-12 mb-3 ">
                  <h2>Tools</h2>

                  </div>
                  <div className="col-lg-8 col-12 d-flex justify-content-spacebetween flex-wrap">
                  <h6>AWS</h6> 
                  <h6>Draw.io Flow charts</h6> 
                  <h6>VS code</h6> 
                  <h6>Mysql</h6> 
                  <h6>Git</h6> 

                  </div>
                </div>
          </div>


          <div className="educatioinSection mt-5 ">
                <h1>EXPERIENCES</h1>
                <div className="education mt-5 row">
                  <div className="col-lg-3 col-6 mb-3">
                  <h2>2020-</h2>

                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex ">
                  <h6>Front-End Developer at SamarthMeditech Pvt Ltd</h6>
                

                  </div>
                  <div className="col-3">
                  <h2>2019-2020</h2>

                  </div>
                  <div className="col-lg-8 col-12 mb-3 d-flex justify-content-spacebetween flex-wrap">
                  <h6>Intern/Junior Web Developer at Sathvik Softech</h6> 
                  

                  </div>
                  <div className="col-lg-3 col-12 mb-3 ">
                  <h2>2018-2019</h2>

                  </div>
                  <div className="col-lg-8 col-12 d-flex   justify-content-spacebetween flex-wrap">
                  <h6>Design Engineer at BLH Hi-Tech Pvt Ltd</h6> 

                  </div>
                </div>
          </div>

          <div className="educatioinSection mt-5">
            <h1>EDUCATION</h1>
            <div className="education mt-5 row">
              <div className="col-lg-3 col-12 mb-3">
              <h2>School</h2>

              </div>
              <div className="col-lg-8 col-12 mb-3 d-flex ">
              <h6>Lamington High School,Hubbali</h6>

              </div>
              <div className="col-3">
              <h2>College</h2>

              </div>
              <div className="col-lg-8 col-12 mb-3  d-flex justify-content-spacebetween flex-wrap">
              <h6>Rural Engineering College,Hulkoti</h6> 

              </div>
              <div className="col-lg-3 col-12 mb-3 ">
              <h2>University</h2>

              </div>
              <div className="col-lg-8 col-12 d-flex justify-content-spacebetween flex-wrap">
              <h6>Visvesvaraya Technological University</h6>

              </div>
            </div>
         </div>
          
      </div>
      

      <Footer/>
      
    </Layout>
  )
}

export default about