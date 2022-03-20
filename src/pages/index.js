import * as React from "react"
import Layout from '../components/Layout'
import { Container,Button } from "react-bootstrap"
import Footer from "../components/Footer"
import { Link } from "gatsby"


// markup
const IndexPage = () => {
  return (
    <Layout>
       <Container fluid className="h-100">

         <div className="main row h-100 m-auto d-flex ">
         
            <div className="profile col-lg-5 col-12 order-lg-1 order-2"> 
             {/* <div className="profile"></div> */}
             </div>
            <div className=" textbody col-lg-6 col-11 order-lg-2 order-1 ">
                      <div className="profileText ">
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

       </Container>

       <Footer/>

    </Layout>
  )
}

export default IndexPage
