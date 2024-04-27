import React from 'react'
import {
    nextSlide, 
    prevSlide, 
    numSlide} from '../../redux/peninsulaHSlice';
import { useSelector, useDispatch } from 'react-redux';
import { peninsula_highlights } from '../../data/peninsula_highlights';


function SliderPeninsulaH() {

  const slideNumber = useSelector((state) => state.peninsulaH.value);
  console.log('slideNumber', slideNumber);

  const dispatch = useDispatch();

  return (
    <div className='relative'>
        <div>
           {peninsula_highlights.map((item, index) => {
          return(
          <div key={item.id} 
              className={parseInt(item.id) === slideNumber 
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"}>
                          
              {parseInt(item.id) === slideNumber && (      
                 <div className='slider_Phighlights'>
                   <div>
                    <img className='highlight_image' src={item.image}/>
                  </div>

                  <div className='highlight_content'>
                   <h2>{item.name}</h2>
                   <h3>{item.date}</h3> 
                   <p>{item.description}</p>
                   <p>{item.hours}</p>
             
                   <a href='#'>{item.link}
                  { item.link && <span>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                   </svg>
                  </span>
                  } 
                  </a>
                  </div>
                  </div>
              )} 
          </div>
          )

          })}
          
           <div className='highlight_slider_button' >
            <button onClick={() => dispatch(prevSlide(slideNumber - 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>

            </button>
            <p>0{slideNumber}/06</p>
            <button onClick={() => dispatch(nextSlide(slideNumber + 1))}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
            </button>
          </div>


        </div>
    </div>
  )
}

export default SliderPeninsulaH