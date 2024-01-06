import React, { useEffect, useState } from 'react';
import './ItemCardPage.scss';
import icondate from "../../images/icon/calendar.png";
import iconcount from "../../images/icon/comments.png";
import {Link, useParams} from 'react-router-dom';
import {cardApi} from "../../shared/api/cardApi";


export const ItemCardPage = () => {
  const [elem, setElem] = useState();

  const location = useParams();

  useEffect(() => {
      if (location) {
          const fetch = async () => {
              console.log(location.id)
              setElem(await cardApi.getCardById(location.id))
          }

          fetch()
      }
  }, [location])

    console.log(elem)
  return (
    
    //<div className="item-card__page">

      <div className="item-cardpage">
        <div className="item-cardpage__date">
            <img className="item-cardpage__icon-date" src={icondate} alt="ic"  />
            {elem?.date}
        </div>

        <img className="item-cardpage__image" src={elem?.image} alt="img" />
        <div className="item-cardpage__name">
          {elem?.name}
        </div>
        <div className="item-cardpage__description"> {elem?.description} </div>
        <div className="item-cardpage__author" dangerouslySetInnerHTML={{__html: `${elem?.author}`}}></div>
          <h4>Материалы</h4>
        <div dangerouslySetInnerHTML={{__html: `${elem?.material}`}}></div>
          <h4>Условности</h4>
        <div dangerouslySetInnerHTML={{__html: `${elem?.conventions}`}}></div> 
<div>



    </div>
         <div className="item-cardpage__line"></div>

          <h4>Инструкция</h4>
          <div dangerouslySetInnerHTML={{__html: `${elem?.instruction}`}}></div>

        <button className="item-cardpage__button-link">
          <a href={elem?.link} className="link" rel="noreferrer" target="_blank">смотреть схему</a>
        </button>

        <div className="item-cardpage__date-comment">
          <div className="item-cardpage__comment-count">
            <img src={iconcount} alt="ic" className="item-cardpage__comment-icon" />
            {elem?.countcomment}
        </div>
        </div>
      </div>

    //</div>
  )
}