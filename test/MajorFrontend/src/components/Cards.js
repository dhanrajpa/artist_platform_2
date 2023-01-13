import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() 
{
  return (
    <div className='cards'>
      <h1>“Creativity takes courage”</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Bismillah.jpg'
              text='Indian musician credited with popularizing the shehnai, a reeded woodwind instrument.'
              path='/services'
            />
            <CardItem
              src='images/mj.jpg'
              text=' American singer, songwriter, dancer and philanthropist'   
              path='/https://www.google.com/'
              />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/paint.jfif'
              text=' Painter is an artist itself who paints the art with help of paint and Brush.'          
              path='/services'
            />
            <CardItem
              src='images/jibin.jpeg'
              text='Jubin Nautiyal is an Indian playback singer and performer.'  
              path='/products'
            />
            <CardItem
              src='images/natyam.jpg'
              text='It is a major form of Indian classical dance that originated in Tamil Nadu'        
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;



