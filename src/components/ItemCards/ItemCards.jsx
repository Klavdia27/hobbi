import React from 'react';
import ItemCard from "../ItemCard/ItemCard.jsx";
import './ItemCards.scss';
import blogs from '../../dataBrowser/blogs.js';

export const ItemCards = () => {
  return (
    <div className="grid-container">

      {blogs.map(blog => <ItemCard key={blog.id} blog={blog}/>)}

    </div>
  )
}