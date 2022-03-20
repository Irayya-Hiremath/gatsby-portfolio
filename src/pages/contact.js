import React from 'react'
import Layout from '../components/Layout'
import { Form } from 'react-bootstrap'

export default function contact() {
  return (
    <Layout>
      <div className=" container contact_page w-75  my-5 border">
        <p>Get In Touch</p>
        <h1>Contact</h1>
        <div className="row h-100">
          <div className="col-lg-6 col-12 border ">
            <div>call</div>
            <div>email</div>
            <div>place</div>
            
          </div>
          <div className=" col-lg-6 col-11">
          <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
          </Form>
          
          </div>
        </div>
        </div>

    </Layout>
  )
}
