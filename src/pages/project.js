import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import { Card} from 'react-bootstrap'
import ecom from '../images/ecoomer.png'
import hospital from '../images/hospita.jpg'
import pharma from '../images/phar.jpeg'
import ware from '../images/ware.jpg'
import clg from '../images/sc1.png'
import comp from '../images/sc2.png'
// import ProjectData from '../components/Data'


 function Project() {

  const ProjectData=[
    {
      ima:  `${ hospital }`,
      description:`This is a web application developed in ExpressJS with the EJS templating
      engine. Worked on the client-side part of this project, ReactJS and Ant D
      used for the front-end side part. This carried out all aspects of a clinic and
      nursing home from admitting the patients to managing paperless
      prescriptions and test reports and billing`,
      title:'Hospital Management System'
    },
    {
      ima:  `${ pharma}`,
      description:`Worked on the client-side aspect of this project in using standard web
      development tools as well as ReactJS. The server-side part is done in
      NodeJS in ExpressJS framework with the database being done in MySql.
      This application carried out almost all the aspects of inventory management
      and invoicing and reports are similar to QuickBooks.`,
      title:'Retail Pharmacy Management System'
    },{
    ima:  `${ ware }`,
      description:`Worked on the client-side aspect of this project in using standard web
      development tools as well as ReactJS and done hybrid application using PWA with next js. The server-side part is done in
      NodeJS in ExpressJS framework with the database being done in MySql.
      This application manages all the warehouse activiteis.`,
      title:'Ware House Mangement'
    },{
      ima:  `${ ecom }`,
        description:`This is an online organic products e-commerce platform that delivers
        products to the doorsteps Worked on the admin side user interface layout
        modifications`,
        title:'Grocery e-commerce application'
      },{
        ima:  `${ clg }`,
          description:`Developed Pre-University College website by using Gatsby static website
          generator and React-bootstrap with Styled component. The website
          shows detailed information about college.`,
          title:'College Website'
        },{
    ima:  `${ comp}`,
      description:`
      This is a static website that includes a company overview and all information
      about products, services. Used HTML,CSS,Javascript technology to build.`,
      title:'Samarth Meditech company Website'
    }
  ]


  return (
    <Layout>
      <div className="container project_page my-5 p-3 ">
        <p className='text-center' style={{fontSize:'1.5rem'  }}>some of my recent works</p>
        <h1 className='text-center p_heading'>PROJECTS</h1>
        <div className="search_bar"></div>
        <div className="row project_box">

              {ProjectData.map((data,i)=>{
                return(
                             

                          <Card className='col-lg-4 col-6 my-3'>
                          <Card.Img className='card_img'  variant="top" src={data.ima}/>
                          <Card.Body className='my-3 w-100'>
                            <Card.Title className='text-bold'>{data.title}</Card.Title>
                            <Card.Text>
                            {data.description}
                            </Card.Text>
                          </Card.Body>
                          </Card>

                )
              })}
          
           </div>
        
        </div>
      <Footer/>


    </Layout>
  )
}
export default Project