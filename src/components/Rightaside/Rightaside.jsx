import React from 'react';
import './Rightaside.scss';
import Subtitle from "../Subtitle/Subtitle.jsx";


function Rightaside() {

  return (
    <aside className="aside-left">
      <Subtitle name={"Платные МК"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">МК спицами</li>
          <li className="list-item">МК крючком</li>
        </ul>
      </div>
      <Subtitle name={"Ваши работы"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">виды работ 1</li>
          <li className="list-item">виды работ 2</li>
        </ul>
      </div>
      <Subtitle name={"Реклама"}/>
      <div className="aside-left__list-subtitle">

      </div>

  </aside>
  )
}

export default Rightaside;