import React,{useEffect,useState} from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import Logo from '../Datas/logo.png'
import 'aos/dist/aos.css';
 
import VectorImage from '../Datas/vector2.jpg'
import "./Header.css";
import Register from "./Register";

export default function Header() {

  useEffect(()=>{
    AOS.init()
    
  },[])
  const[isOpen,setIsOpen]=useState(false);

  return (

    <div className="Head mb-5">

       <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">vijTech Organisation Trust</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                Cybersecurity has a software/data/information component and may have, but most likely does not have, a
                hardware/device component. Cyber engineers apply probability, statistics and cryptographic topics,
                specialized math and engineering topics. The Securing Americas Future through Engineering (SAFE) Lab
                courses provide a solid foundation for students in all degree programs in the HBU College of
                Engineering. The SAFE Lab courses are taught in specially designed classrooms with tables seating four
                students with ready-to-use fabrication equipment, including soldering irons and other tools.
            </div>
            <div class="dropdown mt-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown">
                    Habbyies
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Python Django Framework</a></li>
                    <li><a class="dropdown-item" href="#">Python Flask Framework</a></li>
                    <li><a class="dropdown-item" href="#">Bootstrap 5</a></li>
                    <li><a class="dropdown-item" href="#">Javascript </a></li>
                    <li><a class="dropdown-item" href="#">Playing</a></li>
                    <li><a class="dropdown-item" href="#">Php</a></li>
                    <li><a class="dropdown-item" href="#">Data Structure In Java</a></li>
                </ul>
            </div>
            <ul class="list-group list-group-md ">
                <li class="list-group-item mt-3">C Languages</li>
                <li class="list-group-item mt-3">C++ Languages</li>
                <li class="list-group-item active mt-3">Java Languages</li>
                <li class="list-group-item mt-3">JavaScript Languages</li>
                <li class="list-group-item mt-3">Python Languages</li>
                <li class="list-group-item mt-3">Machine Learning Languages</li>
                <li class="list-group-item mt-3">Artificial Intelligence Languages</li>
            </ul>
        </div>
    </div>


      <div className="nav">
        <h1>
          <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><img className="logo" src={Logo} alt='logo'/>TechCyber</a>
        </h1>
        <ul>
          <li className="nav-link ">
            <button onClick={()=>{setIsOpen(true)}}>Signup</button>
          </li>
          <li className="nav-link">
            <a href="#">Get Started</a>
          </li>
        </ul>
      </div>


    
      {/* Head Main Content */}
      <div className="row head-content " >
        <div className="col-md-6 col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-lg-center" data-aos='zoom-in'>
            <h1 className="head-title">Trending TechBlog</h1>
            <h3 className="head-anim"> 
          <TypeAnimation 
            sequence={[
              "Now Trends New Technology  Computing Power",
              1000,
              "Now Trends New Technology  Smarter Devices",
              1000,
              "Now Trends New Technology  Datafication",
              1000,
              "Now Trends New Technology  Artificial Intelligence and Machine Learning",
              1000,
              "Now Trends New Technology  Extended Reality",
              1000,
              "Now Trends New Technology  Digital Trust",
              1000,
              "Now Trends New Technology  3D Printing",
              1000,
              "Now Trends New Technology  Genomics",
              1000,
              "Now Trends New Technology  New Energy Solutions",
              1000,
              "Now Trends New Technology  Robotic Process Automation(RPA)",
              1000,
              "Now Trends New Technology  Edge Computing",
              1000,
              "Now Trends New Technology  Quantuam Computing",
              1000,
              "Now Trends New Technology  Virtual Reality and Augmented Reality",
              1000,
              "Now Trends New Technology  Blockchain",
              1000,
              "Now Trends New Technology  Internet Of Things(IoT",
              1000,
              "Now Trends New Technology  5G Technologies",
              1000,
              "Now Trends New Technology  Cyber Security",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "1.3em" }}
            repeat={Infinity}
          />
          </h3>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 d-flex justify-content-sm-center ">
          <img src={VectorImage} className='imgs' alt="Text" />
        </div>
      </div>
      
{
  isOpen && (<Register setTrigger={setIsOpen}/>)
}

    </div>





  );
}
