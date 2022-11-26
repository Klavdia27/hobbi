import React from 'react';
import './ItemCard.scss';
import zebra from "../../images/item-images/19.11.2022-zebra.jpeg";
import icondate from "../../images/icon/calendar.png";
import iconcount from "../../images/icon/comments.png";
import blogs from '../../dataBrowser/blogs';


// const item = 
//   {
//     name: "Вязаная зебра",
//     description: "Вязаная игрушка - зебра. Описание вязания от Стэйси.",
//     date: "19/11/2022",
//     countcomment: "3",
//     watch: "23",
//     image: "https://3.bp.blogspot.com/-f9Fuuk-QJoE/VzhnVVM2aaI/AAAAAAAAHcM/eXeoha05CDIwSJ9E6v5H9afJrIaBBgYEgCLcB/s1600/74219357_large_3511355_1532803_80173nothumb500_1_.jpg"
//   }

function ItemCard({blog}) {

  return (
    <div className="item-card">
      <img className="item-card__image" src={blog.image} alt="avatar"/>

      <div className="item-card__name">
        {blog.name}
      </div>
      {/* <div>
        Описание: {item.description}
      </div> */}
      <div className="item-card__line"></div>
      <div className="item-card__date-comment">
        <div className="item-card__date">
          <img className="item-card__icon-date" src={icondate} alt="ic"  />
          {blog.date}
        </div>
        <div className="item-card__comment-count">
          <img src={iconcount} alt="ic" className="item-card__comment-icon" />
          {blog.countcomment}
        </div>
      </div>
      <div className="item-card__watch">
          кол-во просмотров {blog.watch}
        </div>
    </div>
  )
}

export default ItemCard;