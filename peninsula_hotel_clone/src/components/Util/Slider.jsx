import React, { useEffect } from 'react'
import {
    nextSlide, 
    prevSlide, 
    dotSlide} from '../../redux/sliderSlice';
import { fetchRoom } from '../../redux/sliderSlice';
import { useDispatch, useSelector } from "react-redux";


function Slider() {
  
 const slideIndex = useSelector((state) => state.slider.value);
 console.log("slideIndex", slideIndex);
 const dispatch = useDispatch();

const data = useSelector((state) => state.slider.data);
console.log(data);
 useEffect(()=>{
    dispatch(fetchRoom())
 }, [dispatch]);

  return (
    <div className='relative'>
        <div>

            {data.map((item, index)=> {
               return (
                <div 
                key={item.id} 
                className={parseInt(item.id) === slideIndex ? 
                "opacity-100 duration-700 ease-in-out scale-100" 
                : "opacity-0 duration-700 ease-in-out scale-95"
                }>
                {parseInt(item.id) === slideIndex && (
                  <div className='item_slide'>
                  <div>
                      <img src={`http://localhost:3000/${item.image}`} alt={item.name}/>
                  </div>
                  <div className='item_slide_content'>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <button>CHECK AVAILABILITY</button>
                  </div>
                </div>
                )}
                </div>
               );
            })}

        </div>
        <div className='flex absolute bottom-50 left-[35%]'>
            {data.map((dot, index)=> {
                return (
                    <div className='mr-4' key={index}>
                        <div className={index === slideIndex ? 
                        'bg-stone-400 rounded-full p-4 cursor-pointer' :
                        'bg-neutral-200 rounded-full p-4 cursor-pointer'  
                    }
                    onClick={()=> dispatch(dotSlide(index))}
                    >
                        </div>
                    </div>
                );
            })}

        </div>
        <button className='absolute top-[50%] left-4 rgba(134, 112, 80)' onClick={()=> dispatch(prevSlide(slideIndex - 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-12 rgb(134, 112, 80)">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button>

        <button className='absolute top-[50%] right-4' onClick={()=> dispatch(nextSlide(slideIndex + 1))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-12">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </button>
    </div>
  )
}

export default Slider

