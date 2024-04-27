import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchRoomDetail} from '../../redux/roomSlicer';

function Reservation() {

  const location = useLocation();
  console.log(location.state);
  
  
  return (
    <div className='reservation_background'>
    <div className='reservation_container'>Reservation
      <div className='row_container'>
          <div className='column_container1'>
            <div className='reservation_info'>
              <div>
                <div className='small_row'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                </span>
                <h2>Guests</h2>
                </div> 
                <p>{location.state.room.occupancy}</p>
              </div>
              <div>
              <div className='small_row'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                </span>
                <h2>Check-in</h2>
                </div> 
                <p>{location.state.date[0]}</p>
              </div>
              <div>
              <div className='small_row'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                </span>
                <h2>Check-out</h2>
                </div> 
                <p>{location.state.date[1]}</p>
              </div>
            </div>
            <div className='selected_room_info'>
              <h1>Select Room</h1>
              <div className='small_row'>
                <div>
                  <img src={{uri:location.state.room.image}} style={{width:200, height: 200}}/>
                </div>
                <div className='sroom_info'>
                  <h2>{location.state.room.name}</h2>
                  <p>Beds: {location.state.room.beds}</p>
                  <p>Room Size: {location.state.room.size}</p>
                  <p>Room View: {location.state.room.view}</p>
                  <p>Description: {location.state.room.description}</p>
                  <p>Price: € {location.state.room.price} per night</p>
                  <button>BOOK NOW</button>
                </div>
              </div>
            </div>
          </div>

          <div className='column_container2'>
            <div className='your_stay'>
              <h1 style={{ fontSize:'1.25rem', fontStyle:'italic'}}>Your Stay</h1>
              <div className='row_container'>
                <div className='small_flex'>
                  <h2>CHECK-IN</h2>
                  <p>After 15:00</p>
                </div>
                <div className='small_flex'>
                <h2>CHECK-OUT</h2>
                <p>Before 12:00</p>
                </div>
              </div>
              <div className='small_row'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                </span>
                <p>{location.state.date[0]} - {location.state.date[1]} </p>
              </div>
              <div className='small_row'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                </span>
                <p>{location.state.room.occupancy}</p>
              </div>
              <hr></hr>
              <div className='small_row' style={{ display:'flex', justifyContent:'space-between'}}>
                <h1 style={{ fontSize:'1.25rem'}}>Total: </h1>
                <p style={{ fontSize:'1.5rem'}}>€ {location.state.room.price}</p>
              </div>
            </div>
            <div className='assistance'>
              <h2 style={{fontSize:'1.25rem'}}>NEED ASSISTANCE?</h2>
              <p>Our dedicated reservations team is available:</p>
              <p>+33 1 5812 2777</p>
              <p style={{color:'#867050', textDecorationLine:'underline', fontSize:'1rem'}}>reservationppr@peninsula.com</p>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Reservation

 // const { slug } = useParams();
  // const dispatch = useDispatch();
  // const data = useSelector(state => state.room);

    // useEffect(()=> {
  //   dispatch(fetchRoomDetail());
  // }, []);

// { data.data.filter((room)=> room.slug === slug).map((room) =>{
//   return (
//          <p>{room.name}</p>
//   );
// })}