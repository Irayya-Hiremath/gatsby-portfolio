import React from 'react'
import Layout from '../components/Layout'
import { Form,Button, Container } from 'react-bootstrap'
import Footer from '../components/Footer'
// import { CgMail } from "@react-icons/all-files/fa/FaCgMail";

export default function contact() {
  return (
    <Layout>
      <div className=" container contact_page  my-5 p-3  ">
        <p className='text-center' style={{fontSize:'1.5rem'  }}>Get In Touch</p>
        <h1 className='text-center c_heading'>Contact</h1>
        <div className="row h-100">
          <div className="col-lg-5 col-12  m-auto  ">
            <div className='contact_left_side' >+91-8951629431</div>
            <div className='contact_left_side' >ihiremath1991@gmail.com</div>
            <div className='contact_left_side' >Hubbali, Karnataka</div>
            {/* <CgMail/> */}
            
          </div>
          <div className=" col-lg-5 col-12 m-auto ">
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email"/>
              </Form.Group> 
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control className='py-5' as="textarea" rows={3} />
              </Form.Group>
          </Form>
          <div className="button_box px-5">
                        <Button className="button">Submit</Button>
                       
            </div>
          
          </div>
        </div>
        </div>
        <Container fluid className='map'></Container>
      <Footer/>


    </Layout>
  )
}
