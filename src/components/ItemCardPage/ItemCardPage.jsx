import React, { useEffect, useState } from 'react';
import './ItemCardPage.scss';
import icondate from "../../images/icon/calendar.png";
import iconcount from "../../images/icon/comments.png";
import { useParams } from 'react-router-dom';
import blogs from '../../dataBrowser/blogs';
import { useSelector } from 'react-redux';
import {cardApi} from "../../shared/api/cardApi";


export const ItemCardPage = () => {
  const [elem, setElem] = useState();

  const location = useParams();

  useEffect(() => {
    if (location) {
      blogs.forEach((it) => {
        if (it.id === location.id) {
          setElem(it)
        }
      } )
    }
  },[location]);

  useEffect(() => {
      if (location) {
          const fetch = async () => {
              setElem(await cardApi.getCardById(location.id))
          }

          fetch()
      }
  }, [location])

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
        <div dangerouslySetInnerHTML={{__html: `${elem?.material}`}}></div> 
        <div dangerouslySetInnerHTML={{__html: `${elem?.conventions}`}}></div> 
<div>



</div>
        {/* <div className="item-cardpage__line"></div> */}

        <div>{elem?.instruction?.map((el) => 
                <div>
                  <br /> 
                  <div dangerouslySetInnerHTML={{__html: `${el?.title}`}} className="item-cardpage__instruction-title"></div>
                  <br></br> 
                  <div dangerouslySetInnerHTML={{__html: `${el?.description}`}}></div> 
                  <br></br> 
                 <img className="item-cardpage__image" src={el?.image} alt="img" />   {/* а если нет ссылки как не отображать alt */}
                  <br /> 
                </div>
         )}</div>

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