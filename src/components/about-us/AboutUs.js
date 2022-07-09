import React from 'react';
import './AboutUs.css';
import CountUp from 'react-countup';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AboutUs() {
  return (

    <>

      <AnimationOnScroll

        animateOnce={true}
        animateIn="animate__fadeIn">

        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>

        <div className='counter'>

          <ul >
            <p>Ambassadors</p>
            <CountUp
              start={0} end={25000} delay={0}>
              {({ countUpRef }) => (
                <div id='a'>
                  <span id='a'
                    ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </ul>


          <ul>
            <p>College</p>
            <CountUp start={0} end={100} delay={0}>
              {({ countUpRef }) => (
                <div id='a'>
                  <span id='a'
                    ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </ul>


          <ul>
            <p>Reach</p>
            <CountUp start={0} end={20} delay={0}>
              {({ countUpRef }) => (
                <div id='a'>
                  <span id='a'
                    ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </ul>

        </div>
      </AnimationOnScroll>


<div className='aboutus'>


      <AnimationOnScroll
        delay={0}
        animateOnce={true}
        animateIn="animate__fadeIn">

        <h1 id="aboutus">ABOUT US</h1>

        <div className='box'>
          <div id='text'>
            Techkriti is the annual inter-collegiate Technical and Entrepreneurship festival organized by the students of IIT Kanpur. Techkriti is a non-profit organization which was launched in 1995 with the aim of developing interest and encouraging innovation in technology among students of India. Indian Institute of Technology Kanpur, widely celebrated as a centre of academic excellence, is proud to announce the 28th edition of its Technological and Entrepreneurial Festival, Techkriti. Over time, Techkriti has firmly established its reputation as one of the largest technical festivals in Asia, igniting the passion within budding individuals and providing a platform for them to showcase their skills. Innovation and perseverance form the forefront of this blockbuster event, with social welfare also getting the importance it deserves. Every year we impute ambassadors from different colleges throughout the country, whose main responsibility is to publicize Techkriti, in and out of his/her college, while giving them the opportunity to develop their organizational and management skills.
          </div>

        </div>
      </AnimationOnScroll>
    </div>
    </>
  );
}

export default AboutUs;
