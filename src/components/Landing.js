import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
   render() {
      return (
      <div className="restuarant_select">
         <div className="restuarant_select_top">

            <div className="restuarant_select_top-header">Выбери ресторан</div>
            
            <div className="arrow_picker">
               <div className="arrow_picker-up"></div>
               <div className="arrow_picker-down"></div>
            </div>
         </div>

         <div className="restuarant_select_bottom">
            <ul>
               {restaurants.map(restaurant => {
                  return <li key={restaurant.id}>{restaurant.title}</li>
               })}
            </ul>
         </div>
         <button>Перейти в ресторан</button> 

      </div>
      );
   }
}

export default Landing;