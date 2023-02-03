import React, {useEffect, useState} from 'react';
import ItemCard from "../ItemCard/ItemCard.jsx";
import './ItemCards.scss';
import { Link } from 'react-router-dom';
import {cardApi} from "../../shared/api/cardApi";

export const ItemCards = () => {
  const [cards, setCards] = useState([])

  const addCount = async (_id, watch) => {
    console.log(watch)
    await cardApi.updateCard({id: _id, watch: (Number(watch) + 1).toString()})
  }

  useEffect(() => {
    const fetch = async () => {
      setCards(await cardApi.getCards())
    }

    fetch()
  }, [])

  return (
    <div className="grid-container">
      {cards.map(blog =><Link to={`/pagecard/${blog._id}`} onClick={() => addCount(blog._id, blog.watch)}><ItemCard key={blog.id} blog={blog}/></Link> )}
    </div>
  )
}