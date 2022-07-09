import React from 'react';
import './WhyCa.css';
import CardItem from './CardItem';
import { Row } from 'react-bootstrap';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
function WhyCa() {
    return (
        <>
        <div className='whyca'>
            
            <h1 class="hr-lines">WHY CA?</h1>
            <div id="whyca">
          
<img src={"https://cdn-icons-png.flaticon.com/128/263/263075.png"}></img> 
<p>Golden opportunity to witness the grandeur of Techkriti in one of the most renowned and prestigious institutions of the country, IIT Kanpur</p> </div>

<p>Excellent platform to sharpen your Communication and Technical skills</p>

<p>Be a part of national level event promotion and brand management</p>

<p>Chance to organize National Level Competitions in your college</p>

<p>Form a valuable network with thousands of brilliant like-minded students from all across the country</p>

<p>An easy way to get acquainted with ever-changing trends of the Technical and Entrepreneurial World</p>

<p>Opportunity to keep abreast with cutting - edge technologies from IIT Kanpur</p>

           
           
            </div>


           <div className='respons'>
            <h1 id="respons">RESPONSIBILITIES</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <AnimationOnScroll

                        animateOnce={true}
                        animateIn="animate__fadeIn">
                        <Row id='group'>

                      
                            <CardItem
                                src="https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?t=st=1657235387~exp=1657235987~hmac=acc9bffa81082967b5ddde8d4fa82d300c3504d969dda228878e2a4618539ab6&w=826"
                                title="Coordination"
                                text=' Coordinating with the various participating colleges.
              With the help of Techkriti, CAs organize workshops and events in their respective colleges'
                            />

                            <CardItem
                                src='https://img.freepik.com/free-vector/digital-marketing-team-with-laptops-light-bulb-marketing-team-metrics-marketing-team-lead-responsibilities-concept-white-background_335657-2022.jpg?t=st=1657236294~exp=1657236894~hmac=c588e1d5243ef225dd5ccbf6de2b7062fc1794088096625a46778ba987b1b945&w=900'
                                title="College Publicity"
                                text=" A campus ambassador also helps in publicising Techkriti, and ensuring participation of the respective campus community."


                            />
                            <CardItem
                                src="https://img.freepik.com/free-vector/marketing-consulting-concept-illustration_114360-9027.jpg?size=626&ext=jpg"
                                title="Social Media"
                                text="  Promote Techkriti through the social media platform by publicizing its events on various social media channels like Facebook, Twitter, Instagram"


                            />
                            <CardItem
                                src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg?size=626&ext=jpg"
                                title="Blogs"
                                text=" Improves his/her writing skills through our blog series, in which he/she may give thoughts about anything for publishing on Techkriti official pages"

                            />

                        </Row>
                    </AnimationOnScroll>
                </div>
            </div>
            </div>
            </>


    );
}

export default WhyCa;