import React from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'


function about() {
  return (
    <Layout>
      <div className=" container readmore w-75 h-auto my-5 border">
        <div className="row h-100">
          <div className="col-lg-5 read_about col-12 order-lg-1 order-2 "></div>
          <div className=" col-lg-6 col-11 order-lg-2 order-1 mb-5 ">
                      <div className="aboutText  ">
                        <p style={{fontSize:'2.5rem'}}>Hello,This is</p>
                        <p style={{fontSize:'2.5rem'}}>Irayya Hiremath</p>
                        {/* <p style={{fontSize:'3.5rem'}}>Frontend Devloper</p> */}
                        <p  style={{fontSize:'1.5rem',textAlign:'justify'}}>I am working as a FrontEnd Devloper. I love to design and make new web experiences for the people,<br />
                        Looking for an opportunity in esteemed organization to put my best efforts andalways hunger for learning new things and put those skills into continuous implementation to achieve personal
                        growth and fulfilling organizational goals.</p>
                      </div>

                      <Button className="button">Works</Button>
                      <Button className="button"> <Link to='/about'>  Readmore </Link> </Button>
          </div>
        </div>

      </div>
      <div className="aboutsection w-75 m-auto mt-5 border border-danger">
          <div className="educatioinSection ">
            <h1>EDUCATION</h1>
            <div className="education mt-5 row">
              <div className="col-lg-3 col-12 mb-3">
              <h2>School</h2>

              </div>
              <div className="col-lg-8 col-12 mb-3 d-flex ">
              <h6>Lamington High School,Hubli</h6>

              </div>
              <div className="col-3">
              <h2>College</h2>

              </div>
              <div className="col-lg-8 col-12 mb-3  d-flex justify-content-spacebetween flex-wrap">
              <h6>Rural Engineering College,Hulkoti</h6> 

              </div>
              <div className="col-lg-3 col-12 mb-3 ">
              <h2>Univercity</h2>

              </div>
              <div className="col-lg-8 col-12 d-flex justify-content-spacebetween flex-wrap">
              <h6>Visvesvaraya Technological University</h6>

              </div>
            </div>
          </div>
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
              <h6>Tailwind css</h6>  <h6>Ant D</h6> 
              <h6>Next JS</h6> 

              </div>
              <div className="col-lg-3 col-12 mb-3 ">
              <h2>Tools</h2>

              </div>
              <div className="col-lg-8 col-12 d-flex   justify-content-spacebetween flex-wrap">
              <h6>AWS</h6> 
              <h6>Draw.io Flow charts</h6> 
              <h6>VS code</h6> 
              <h6>Mysql</h6> 
              <h6>Git</h6> 

              </div>
            </div>
          </div>
      </div>

      <Footer/>
    </Layout>
  )
}

export default about