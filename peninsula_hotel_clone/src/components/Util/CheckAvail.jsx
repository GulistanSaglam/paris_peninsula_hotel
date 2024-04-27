import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { DatePicker} from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;


function CheckAvail({price, room}) {
   const [dates, setDates] = useState([]);
   const navigate = useNavigate();

   function goToReservation(){
    navigate("/reservation", {state: {
      date:dates,
      room: room
    }});
   }

    // console.log(room.slug);
  return (
    <div className='reservation'>

     <div className='check_availability'>
         {price && room && <h2>BOOK THIS ROOM</h2>}
         {!price && !room && <h2>RESERVE</h2> }
       
         <div>
         <RangePicker 
          onChange={(values) => {
          setDates(values.map(item => {
          return moment(item).format("MMM Do YY");
          }))
         }}/>
         </div>
       
         {price && room && <h3>{room.occupancy}</h3>}
         {!price && !room && <h3>people number</h3>}

         <button onClick={goToReservation}>CHECK AVAILABILITY</button>


    </div>

    { price && room &&  <p>Rates from EUR {price} per night</p>}
    {!price && !room && <p>Book directly with us to enjoy Peninsula Time, a flexible check-in & check-out programme and receive the best available rate.</p> }
  
    </div>
  )
}

export default CheckAvail