import React from 'react';
import './WhyCa.css';
import CardItem from './CardItem';


function WhyCa() {
  return (
    <div className='cards'>
        
      <h1>RESPONSIBILITIES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400&display=swap"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap"></link>
            <CardItem
              src='https://wallpaperaccess.com/full/2040033.jpg'
              text='

              The responsibilities of CAs include coordinating with the various participating colleges
              With the help of Techkriti, CAs organize workshops and events in their respective colleges
              They are thus the point of contact between Techkriti and respective college administrations
          
          '
             
             
            />
            <CardItem
              src='https://www.digitalmarketing.org/hs-fs/hubfs/shutterstock_1465308272.jpg?width=600&name=shutterstock_1465308272.jpg'
              text='

              A campus ambassador also helps in publicising Techkriti, and ensuring participation of the respective campus community
          
          '
             
            />
         
            <CardItem
              src='https://meson-digital.com/wp-content/uploads/2021/08/social-media-marketing-1024x683.jpg'
              text='

              CAs also have to promote Techkriti through the social media platform by publicizing its events on various social media channels like Facebook, Twitter, Instagram, etc. utilising their social media network for the growth of Techkriti 22
              Occasionally, based on the skills provided in the registration form, some festival tasks may be assigned to the CAs
          
          '
            
            />
            <CardItem
              src="https://cutewallpaper.org/21/wallpapers-blog/Want-to-Blog-About-Wallpapers-You-Sell-Here-Are-Some-Tips-.jpg"
              text='

              A campus ambassador also improves his/her writing skills through our blog series, in which he/she may give thoughts about anything for publishing on Techkriti official Facebook, Instagram, Twitter, and other social media apps.
          
          '
         
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WhyCa;