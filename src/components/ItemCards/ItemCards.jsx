import React from 'react';
import ItemCard from "../ItemCard/ItemCard.jsx";
import './ItemCards.scss';
import blogs from '../../dataBrowser/blogs.js';
import { Link } from 'react-router-dom';

export const ItemCards = () => {
  return (
    <div className="grid-container">

      {blogs.map(blog =><Link to={`/pagecard/${blog.id}`}><ItemCard key={blog.id} blog={blog}/></Link> )}

    </div>
  )
}