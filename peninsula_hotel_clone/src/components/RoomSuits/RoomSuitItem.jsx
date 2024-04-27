import React from 'react'
import { Link} from 'react-router-dom';

function RoomSuitItem({room}) {
  return (

    <li>
      <Link to={`/roomsuits/${room.slug}`}>
      <div className='card'>
        <div>
          <img src={`http://localhost:3000/${room.image}`} alt={room.name}/>
        </div>
        <div className='card_content'>
          <h2>{room.name}</h2>
          <p>SIZE {room.size}</p>
          <p>Rate from EUR {room.price} per night</p>
          <p>View Room***</p>
          <button>Check Availability</button>
        </div>
      </div>
      </Link>
    </li>

  );
}

export default RoomSuitItem