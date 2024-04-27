import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRoom } from '../../redux/roomSlicer';

import SmallHeader from '../Util/SmallHeader';
import CheckAvail from '../Util/CheckAvail';
import RoomSuitItem from './RoomSuitItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FilterTab from '../Util/FilterTab';


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

function RoomSuits({details}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />
  };
  
  const dispatch = useDispatch();
  const data = useSelector(state => state.room);
  useEffect(()=> {
    dispatch(fetchRoom());
  },[dispatch])
  console.log(data);

  return (
    <>
    <div className='unique_container'>
      <SmallHeader smallHeader="UNIQUE" header="DETAILS"/>
      <ul className='unique_detail'>
      <Slider {...settings}>
        { details.map((room) =>(
           <li className='roomsuitsdetail'>
           <div>
           <img src={room.image} alt={room.name}/>
           </div>
           <div>
           <h2>{room.name}</h2>
           <p>{room.description}</p>
           </div>
         </li>
        ) )}
      </Slider>
      </ul>
    </div>

    <div className='find_roomSuites'>
    <SmallHeader smallHeader="FIND" header="ROOMS & SUITES"/>
    <CheckAvail/>
    </div>
    
    <div className='roomsuitList'>
      <FilterTab/>
    </div>
    
    <div>
      <ul className='list'>
        { 
        data.isLoading ? <h1>Loading....</h1> :
        data.data.map((room)=>{
          return <RoomSuitItem room={room} key={room.id}/>
        })
      }
      </ul>
    </div>
    </>
  )
}

export default RoomSuits
