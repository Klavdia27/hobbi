import React from 'react';
import './ItemCardPage.scss';
import zebra from "../../images/item-images/19.11.2022-zebra.jpeg";
import icondate from "../../images/icon/calendar.png";
import iconcount from "../../images/icon/comments.png";

const item = 
  {
    name: "Вязаная зебра",
    description: "Вязаная игрушка - зебра. Описание вязания от Стэйси.",
    date: "19/11/2022",
    countcomment: "3",
    image: "https://3.bp.blogspot.com/-f9Fuuk-QJoE/VzhnVVM2aaI/AAAAAAAAHcM/eXeoha05CDIwSJ9E6v5H9afJrIaBBgYEgCLcB/s1600/74219357_large_3511355_1532803_80173nothumb500_1_.jpg"
  }

export const ItemCardPage = () => {
  return (
    
    //<div className="item-card__page">

      <div className="item-cardpage">
        <div className="item-cardpage__date">
            <img className="item-cardpage__icon-date" src={icondate} alt="ic"  />
            {item.date}
        </div>

        <img className="item-cardpage__image" src={zebra} alt="zebra" />
        <div className="item-cardpage__name">
          {item.name}
        </div>
        {/* <div>
          Описание: {item.description}
        </div> */}
        <div className="item-cardpage__line"></div>
        <div className="item-cardpage__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Veritatis, molestiae laborum earum reiciendis sit in debitis sed molestias quam? Laudantium.
        </div>
        <button className="item-cardpage__button-link">
          <a href="https://www.liveinternet.ru/users/len4ika/post166278000/" className="link"  target="_blank">смотреть схему</a>
        </button>
        <div className="item-cardpage__date-comment">
          <div className="item-cardpage__comment-count">
            <img src={iconcount} alt="ic" className="item-cardpage__comment-icon" />
            {item.countcomment}
        </div>
        </div>
      </div>

    //</div>
  )
}