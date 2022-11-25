import React from 'react';
import ItemCard from "../ItemCard/ItemCard.jsx";
import './ItemCards.scss';

export const ItemCards = () => {
  return (
    <div className="grid-container">

      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>
      <ItemCard/>

    </div>
  )
}