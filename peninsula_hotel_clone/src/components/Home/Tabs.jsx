import React, {useState} from 'react'
import TabButton from './TabButton';
import { ourparis_dining } from '../../data/ourparis_dining';

function Tabs() {
  const [ selectedTopic, setSelectedTopic ] = useState('Le Lobby');
  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  

  return (
  <div className='Tabs'>
     
     <menu className='tabsList'>
          <TabButton className="tabButtonStyle" onSelect={() =>handleSelect('Le Lobby')}>Le Lobby</TabButton>
          <TabButton onSelect={() =>handleSelect('Loiseau Blanc')}>Loiseau Blanc</TabButton>
          <TabButton onSelect={() =>handleSelect('LiLi')}>LiLi</TabButton>
          <TabButton onSelect={() =>handleSelect('Le Bar Kleber')}>Le Bar Kleber</TabButton>
          <TabButton onSelect={() =>handleSelect('La Terrasse Kleber')}>La Terrasse Kleber</TabButton>
          <TabButton onSelect={() =>handleSelect('The Kleber Lounge, Cigar Lounge')}>The Kleber Lounge, Cigar Lounge</TabButton>
          <TabButton onSelect={() =>handleSelect('Le Rooftop')}>Le Rooftop</TabButton>
    </menu>
          
            {selectedTopic && ourparis_dining.filter((item) => item.name === selectedTopic).map((item) => {
               return(
                <div className='tabcomponent'>
                <div>
                    <img src={item.image}/>
                </div>
        
                <div className='tabcomponent_column'>
                    <h2>{item.name}</h2>
                    
                   <div className='tabcomponent_row'>
                      <h3>CUISINE</h3>
                      <h4>{item.cuisine}</h4>
                   </div>
        
                   <div className='tabcomponent_row'>
                    <div className='row'>
                      <h3>EMAIL</h3>
                      <h4>{item.email}</h4>
                    </div>
                    <div className='row'>
                      <h3>TEL</h3>
                      <h4>{item.tel}</h4>
                    </div>
                   </div>
        
                   <span></span>
        
                   <div>
                    <h3>DESCRIPTION</h3>
                    <p>{item.description}</p>
                   </div>
        
                   <span></span>
        
                   <div>
                    <h3>HOURS</h3>
                    <p>{item.hours}</p>
                   </div>
        
                   <div className='tabcomponent_row abutton'>
                    <a href='#'>EXPLORE MORE</a>
                    <button>BOOK A TABLE</button>
                   </div>
                </div>
            </div>
               );
            })
            }
   
  
  </div>

  );
}

export default Tabs



{/* <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>  */}
