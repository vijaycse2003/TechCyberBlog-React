import React from 'react'
import './Footer.css'

export default function Footer(){
  return (
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <i className='fa fa-facebook'></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <i className='fa fa-twitter'></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <i className='fa fa-linkedin'></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="https://github.com/vijaycse2003">
      <i className='fa fa-github'></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <i className='fa fa-instagram'></i>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>

  )
}
