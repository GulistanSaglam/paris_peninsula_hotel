import React from 'react'
import homeExp1 from '../../images_local/home_exp1.jpg';
import homeExp2 from '../../images_local/home_exp2.jpg';
import homeExp3 from '../../images_local/home_exp3.jpg';
import homeExp4 from '../../images_local/home_exp4.jpg';
import AtGlance from './AtGlance';
import Accommodation from './Accommodation';
import SmallHeader from '../Util/SmallHeader';
import CheckAvail from '../Util/CheckAvail';
import FeatureDining from '../Dinning/FeatureDining';
import Location from './Location';
import HomeOffers from '../Offers/HomeOffers';
import OurParis from './OurParis';
import PeninsulaHighlights from './PeninsulaHighlights';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:"white", background: "rgba(134, 112, 80, 0.2)" }}
      onClick={onClick}
    />
  );
}


function Home({glance}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  return (
    <>
    <div className='home'>
   
      <div className='link'>
      <CheckAvail/>
        {/* <a href='#'>Book directly with us to enjoy Peninsula Time, a flexible check-in & check-out programme and receive the best available rate.</a> */}
        <a href='#' className='link_decoration'>Current Services and Facilities Offered</a>
      </div>

      <div className='container1'>
        <div className='address'>
          <p>THE PENINSULA PARIS, 19 AVENUE KLÉBER, 75116 PARIS, FRANCE</p>
        </div>
        <div className='contact'>
          <a href='#'>+33 (0)1 58 12 28 88</a>
          <span></span>
          <a href='#'>VIEW MAP</a>
          <span></span>
          <a href='#'>PPR@PENINSULA.COM</a>
        </div>
      </div>

      <SmallHeader smallHeader="THE PENINSULA PARIS" header="EXPERIENCE"/> 
      <div className='experience_row'>
        <div className='first_row'>
        <img src={homeExp1} />
            <div>
            <h2>Heritage, glamour<br/>and fine dining<br/> in the heart of City of Light</h2>
            <p>Often called the “little Versailles”, this Parisian Grande Dame sits in a legendary, 
              century-old, heritage building renovated in 2014, infusing cutting-edge modernity in a century of elegance, 
              glamour and French history. Within walking distance of some of the world’s most famous monuments, 
              museums and luxury shopping districts, the palace houses 200 of the most spacious rooms in Paris, including 93 suites.</p>
            </div>
        </div>
         <div className='second_row'>
            <img src={homeExp2} className='image2'/>
            <img src={homeExp3} className='image3'/>
            <img src={homeExp4} className='image4'/>
         </div>

         </div>
    </div>
    <Accommodation/>
    <div className='atGlance'>
      <SmallHeader smallHeader="THE PENINSULA PARIS" header="AT A GLANCE"/>
      <ul className='atGlanceList' >
      <Slider {...settings}>
        {glance.map((glanceItem) => {
         return <AtGlance key={glanceItem.title} {...glanceItem}/>
        })}
        </Slider>
      </ul>
    </div>
    <HomeOffers/>
    <FeatureDining/>
    <OurParis/> 
    <PeninsulaHighlights />
    <Location/>
    </>
  )
}

export default Home