import React, { useEffect } from 'react'
import SmallHeader from '../Util/SmallHeader'
import CheckAvail from '../Util/CheckAvail';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoomDetail} from '../../redux/roomSlicer';

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

function Room() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };

  const { slug } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(state => state.room);

  useEffect(()=> {
    dispatch(fetchRoomDetail());
  }, []);
  
  // console.log('data', data);
  // console.log('slug', slug);
  return (
    <div>
        <SmallHeader header={slug} />
        <div className='roomDetail'>
            { data.data.filter((room)=> room.slug === slug).map((room) =>{
              // console.log(room);
              // console.log(room.id);
              const featureImg = room.features;
              return (
            <div className='room_position'>
              <div className='room_row_1'>
                <div className='room_container'>
                  <div>
                    <img src={`http://localhost:3000/${room.image}`} alt={room.name}/> 
                  </div>
                  <div>
                   <p>{room.description}</p>
                  </div>
                </div>
              </div>

               <CheckAvail price={room.price} room={room}/>

               <div className='room_row_2'>
                <div className='room_row_info'>
                  <h2>BEDS</h2>
                  <p>{room.beds}</p>
                </div>
                <div className='room_row_info'>
                  <h2>ROOM SIZE</h2>
                  <p>{room.size}</p>
                </div>
                <div className='room_row_info'>
                  <h2>OCCUPANCY</h2>
                  <p>{room.occupancy}</p>
                </div>
                <div className='room_row_info'>
                <h2>VIEW</h2>
                <p>{room.view}</p>
                </div>
                <div className='room_row_info'>
                <h2>LOCATION</h2>
                <p>{room.location}</p>
                </div>


                
               </div>

              <div className='more_info_section'>
                <h2 className='header'>+ MORE INFORMATION</h2>
               <div className='more_info_container'>
                <div className='generalContainer'>
                <h2>General Features</h2>
                  <ul>
                  {room.general_features.map((item, index)=>{
                     return (<li>{item}</li>);
                     console.log(item);
                  })
                  }
                  </ul>
                </div>

                <div className='generalContainer'>
                  <h2>Bathroom</h2>
                  <ul>
                  {room.bathroom.map((item, index)=>{
                     return (<li>{item}</li>);
                     console.log(item);
                  })
                  }
                  </ul>
                </div>

                <div className='generalContainer'> 
                  <h2>Audio Visual</h2>
                  <ul>
                  {room.audio_visual.map((item, index)=>{
                     return (<li>{item}</li>);
                     console.log(item);
                  })
                  }
                  </ul>
                </div>

                <div className='generalContainer'>
                  <h2>Amenities and Services</h2>
                  <ul>
                  {room.service.map((item, index)=>{
                     return (<li>{item}</li>);
                     console.log(item);
                  })
                  }
                  </ul>
                </div>
               </div>
              </div>

               {/* <div>
                <SmallHeader smallHeader="ROOM" header="FEATURES"/>
                <div>
                  <ul>
                  <Slider {...settings}>
                    {room.features.map((feature)=>{
                      console.log(feature);
                      return(
                        <li key={feature.id}>
                        <img src={feature.image}/>
                      </li>
                      );
                    })}
                  </Slider>

                  </ul>
                </div>
               </div> */}
              </div>
              );

            })}
        </div>

    </div>
  )
}

export default Room
