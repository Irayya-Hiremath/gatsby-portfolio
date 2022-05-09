import React,{useState,useEffect} from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Card,InputGroup,FormControl} from "react-bootstrap";
import ProjectData from "../components/Data";
import{FaSistrix} from "@react-icons/all-files/fa/FaSistrix";
import AOS from "aos";



function Project() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

   const [search ,setSearch]=useState('')


  return (
    <Layout>
      <div className="container project_page my-5 p-3 ">
        <p className="text-center" style={{ fontSize: "1.5rem" }}>
          Some Of My Recent Works
        </p>
        <h1 className="text-center p_heading">PROJECTS</h1>

        <div className="search_bar row" >
         <InputGroup size="lg d-flex">
              <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="input"
              
              onChange={(e)=>{
                setSearch(e.target.value)
                console.log(e.target.value)
              }} 
              /> 
               <FaSistrix className="searchIcon" type="button"/>
        </InputGroup>
        </div>

        <div className="row project_box">
          
          {ProjectData.filter((p)=>p.title.toUpperCase().includes(search)).map((data, i) => {
            return (
              <Card  data-aos="fade-left" className="col-lg-4 col-6 my-3">
                <Card.Img className="card_img" variant="top" src={data.img} />
                <Card.Body className="my-3 w-100">
                  <Card.Title className="text-bold">{data.title}</Card.Title>
                  <Card.Text className="text-justify">
                    {data.description}
                  </Card.Text>
                  <Card.Text className="d-flex flex-wrap">
                    {data.tech.map((d, i) => {
                      return <small className="p_technolgies">{d}</small>;
                    })}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}

        </div>
      </div>
      <Footer />
    </Layout>
  );
}
export default Project;
