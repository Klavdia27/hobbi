import React from 'react';
import ItemCard from "../ItemCard/ItemCard.jsx";
import './ItemCards.scss';
import blogs from '../../dataBrowser/blogs.js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const ItemCards = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count)
  console.log(count);

  const addCount = () => {
    dispatch({type:"ADD_COUNT", payload: 1})
  }

  return (
    <div className="grid-container">

      {blogs.map(blog =><Link to={`/pagecard/${blog.id}`} onClick={() => addCount()}><ItemCard key={blog.id} blog={blog}/></Link> )}

    </div>
  )
}