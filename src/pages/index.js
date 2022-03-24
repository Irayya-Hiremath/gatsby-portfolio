import * as React from "react"
import Layout from '../components/Layout'
import { Container,Button } from "react-bootstrap"
import Footer from "../components/Footer"
import { Link } from "gatsby"
import AOS from 'aos';
import { useEffect } from "react"


const IndexPage = () => {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    AOS.refresh();
  }, []);

  return (
    <Layout>
       <Container fluid className="my-5">

         <div className="main row m-auto p-3 ">
         
            <div className="profile col-lg-5 col-12 order-lg-1 order-2 b" data-aos="fade-up"
     data-aos-duration="3000"> </div>
            <div className=" textbody col-lg-7 col-12 order-lg-2 order-1">
                      <div className="profileText">
                        <p style={{fontSize:'2.5rem'}}>Hello,This is</p>
                        <p style={{fontSize:'2.5rem'}}>Irayya Hiremath</p>
                        {/* <p style={{fontSize:'3.5rem'}}>Frontend Devloper</p> */}
                        <p style={{fontSize:'1.5rem',textAlign:'justify'}}>I am working as a FrontEnd Devloper. I love to design and make new web experiences for the people,<br />
                        Looking for an opportunity in esteemed organization to put my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal
                        growth and fulfilling organizational goals.</p>
                      </div>

                      
                      <div className="button_box  p-3">
                        <Button className="button"><Link to='/project'>  Works </Link> </Button>
                        <Button className="button"> <Link to='/about'>  Readmore </Link> </Button>
                      </div>
                      
            </div>

         </div>

       </Container>

       <Footer/>

    </Layout>
  )
}

export default IndexPage
