import React from 'react';

import { Card } from '../card/card.components';

import './card-list.styles.css';



export const CardList = props => (
     <div className='card-list'>
          { props.minions.map(minions => (
               <Card key={minions.id} minions={minions} />
          ))}
     </div>
);