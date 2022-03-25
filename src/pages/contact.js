import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Form,Button, Container } from 'react-bootstrap'
import Footer from '../components/Footer'
// import { CgMail } from "@react-icons/all-files/fa/FaCgMail";
import emailjs from 'emailjs-com'

const Result =() =>{
  return(
  <p className='result'>Your Message Has Been Sent Successfully <br />
  I will Contact You Soon </p>
  );
};

function Contact() {

  const [result, showResult]=useState(false);

  function sendEmail(e){
    e.preventDefault(); 

    emailjs.sendForm( 'service_610fgdb',
    'template_8598s19',
    e.target,
    "n9_E03eNOBf4GsTFI").then(res=>{console.log(res);}).catch(error=> console.log(error));

    e.target.reset();
    showResult(true);
  }
  setTimeout(()=>{
    showResult(false)
  },5000)
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
            
          </div>
          <div className=" col-lg-5 col-12 m-auto ">
          <Form onSubmit={sendEmail}>
              <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" required name='name' />
              </Form.Group>
              <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                <Form.Label>Your Email</Form.Label>
                <Form.Control required type="email" name='user_email'/>
              </Form.Group> 
              <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control required className='py-3' as="textarea" name='message' rows={3} />
              </Form.Group>

              <div className='row mx-5 '>{ result ? <Result/> : null} </div>

              <Button type='submit' className="button mx-5 mt-4">Submit</Button>
          </Form>
          </div>
        </div>
        </div>
        <Container fluid className='map'></Container>
      <Footer/>


    </Layout>
  )
}
export default Contact
