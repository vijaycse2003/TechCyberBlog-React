import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import "./Swipslide.css";

export default function Swipslide() {
    
  return (
   
<div className="container">
      <h1 className="heading">TechCyber Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src='https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8QWklMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://media.istockphoto.com/id/1396801907/photo/a-small-hud-with-a-human-body-image-and-a-scientist-or-a-doctor-working-with-it.jpg?b=1&s=170667a&w=0&k=20&c=iubOVkeEV-eRipV6Nf-k2w_UmUiikC6fZaPYnDqIYpY=' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://media.istockphoto.com/id/1435491075/photo/business-logistics-technology-concept.jpg?b=1&s=170667a&w=0&k=20&c=rC44MqclncroQCuhM9IdK1BzgqFzYWoxWOUIr5KCgBs=' alt="slide_image" />
        </SwiperSlide>

        <SwiperSlide>
          <img src='https://img.freepik.com/premium-photo/hand-touching-virtual-world-with-connection-network_50039-1565.jpg?size=626&ext=jpg' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/retinal-biometrics-technology-with-man-s-eye-digital-remix_53876-108518.jpg?size=626&ext=jpg' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/teenager-dressed-white-t-shirt-using-virtual-reality-glasses-with-graph-charts-numbers-lines-technology-concept_613910-5097.jpg?size=626&ext=jpg&ga=GA1.2.270653226.1680970036&semt=sph' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://t4.ftcdn.net/jpg/00/51/49/07/240_F_51490712_YGjCvUhtV970HAB6KeB8jgyZbkPLKGvj.jpg' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://t3.ftcdn.net/jpg/05/32/63/84/240_F_532638499_1WToHX6nTwVhZFP2uXdUdr2NRmesUmbu.jpg' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?size=626&ext=jpg&ga=GA1.2.270653226.1680970036&semt=sph' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/programming-background-concept_23-2150170140.jpg?size=626&ext=jpg&ga=GA1.2.270653226.1680970036&semt=sph' alt='alt'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/programming-background-concept_23-2150170123.jpg?size=626&ext=jpg&ga=GA1.2.270653226.1680970036&semt=sph' alt='alt'/>
        </SwiperSlide>
          
        <SwiperSlide>
          <img src='https://media.istockphoto.com/id/1397047849/photo/abstract-circuit-board-with-a-lot-of-micro-chips.jpg?b=1&s=170667a&w=0&k=20&c=RJ1PWMo5fcGl1XaTeIQSOA3NdtgRDKO6QJfV9XMa8XQ=' alt="slide_image" />
        </SwiperSlide>
          
        <SwiperSlide>
          <img src='https://img.freepik.com/premium-photo/robot-hand-using-artificial-intelligence-interface_780608-10855.jpg?size=626&ext=jpg&ga=GA1.1.270653226.1680970036&semt=sph' alt="slide_image" />
        </SwiperSlide>
          
        <SwiperSlide>
          <img src='https://t4.ftcdn.net/jpg/03/43/01/67/240_F_343016778_N2rdH8qyjDGNe1yJIJIWv0epxUVnsOv5.jpg' alt="slide_image" />
        </SwiperSlide>
          
         

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>


  );
}
