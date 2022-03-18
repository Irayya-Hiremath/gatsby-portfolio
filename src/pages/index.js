import * as React from "react"
import Layout from '../components/Layout'
import { Container,Button } from "react-bootstrap"
import Footer from "../components/Footer"

// markup
const IndexPage = () => {
  return (
    <Layout>
       <Container fluid className="h-100">

         <div className="main row h-100 m-auto d-flex ">
         
            <div className="profile col-lg-5 col-12 order-lg-1 order-2"> 
             {/* <div className="profile"></div> */}
             </div>
            <div className=" textbody col-lg-7 col-12 order-lg-2 order-1 ">
                      <div className="profileText ">
                        <p style={{fontSize:'3rem'}}>Hi,I am  <span>Irayya Hiremath</span> </p>
                        <p style={{fontSize:'5rem'}}>Frontend Devloper</p>
                        <p  style={{fontSize:'1.5rem',textAlign:'justify'}}>a Mechanical Engineering graduate from Hulkoti, Gadag. Started as a Design Engineer at BLH H-Tech PVT LTD, Hubli in an IOT team for SPOUT project. A Prototype development of an Alcohol inventory system developed using IOT technology, I was responsible for parts designing of Spout using Catia V5.
                        After completing the SPOUT prototype, Continued in the same organization as a customer facing Project Coordinator/Technical consultant for web and mobile Applications Under IT Dept. In that role I was responsible for gathering Customer requirements and signoff, Designing the wireframes and application flows. Collaborating with Sales, development and testing team to complete the application implementation. Customer Demo and Presentation.
                        Currently, I am a Web developer intern at Sathvik Softech, Hubli. My responsibility include designing and developing UI for the websites and integrating it with back-end system.</p>
                      </div>

                      <Button className="button">Works</Button>
                      <Button className="button">Download CV</Button>
            </div>

         </div>

       </Container>

       <Footer/>

    </Layout>
  )
}

export default IndexPage
