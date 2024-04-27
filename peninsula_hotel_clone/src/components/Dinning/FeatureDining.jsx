import React from 'react'
import SmallHeader from '../Util/SmallHeader'
import DinningImg from '../../images_local/dining.jpg'

function FeatureDining() {
  return (
    <div>
        <SmallHeader smallHeader="FEATURED" header="INSPIRED DINING"/>
        <div className='featureDinning'>
            <img src={DinningImg}/>
            <div className='featureDinning_content'>
                <h2>L'OISEAU BLANC</h2>
                <p>The crowning glory of The Peninsula Paris is L’Oiseau Blanc rooftop restaurant and bar. 
                    French cuisine hand-picked every day at the market is enjoyed alongside stunning views of the capital’s most iconic monuments.</p>
                <a href='#'>LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default FeatureDining