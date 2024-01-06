import React, {useEffect, useState} from 'react';
import ItemCard from "../ItemCard/ItemCard.jsx";
import './ItemCards.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {cardApi} from "../../shared/api/cardApi";

export const ItemCards = () => {
  const [cards, setCards] = useState([])
  const dispatch = useDispatch();

  const addCount = () => {
    dispatch({type:"ADD_COUNT", payload: 1})
  }

  useEffect(() => {
    const fetch = async () => {
      setCards(await cardApi.getCards())
    }

    fetch()
  }, [])

  return (
    <div className="grid-container">
      {cards.map(blog =><Link to={`/pagecard/${blog.id}`} onClick={() => addCount()}><ItemCard key={blog.id} blog={blog}/></Link> )}
    </div>
  )
}