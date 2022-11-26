import React from 'react';
import './Leftaside.scss';
import Subtitle from "../Subtitle/Subtitle.jsx";


function Leftaside() {

  return (
    <aside className="aside-left">
      <Subtitle name={"Узоры вязания"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">Узоры спицами</li>
          <li className="list-item">Узоры крючком</li>
        </ul>
      </div>
      <Subtitle name={"Вязание для детей"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">Комбинезон, боди, песочник</li>
          <li className="list-item">Безрукавка, жилет</li>
          <li className="list-item">Свитер, полувер, жакет</li>
          <li className="list-item">Пончо, болеро, накидка</li>
          <li className="list-item">Крестильный набор </li>
          <li className="list-item">Топ, ажурная кофточка</li>
          <li className="list-item">Платье, сарафан</li>
          <li className="list-item">Перчатки, варежки</li>
          <li className="list-item">Шапка, шарфик, берет</li>
          <li className="list-item">Штаны, шорты</li>
          <li className="list-item">Юбка</li>
          <li className="list-item">Пальто, курточка</li>
          <li className="list-item">Носки, тапки, пинетки</li>
          <li className="list-item">Конверт, спальник</li>
        </ul>
      </div>
      <Subtitle name={"Вязание для женщин"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">Комбинезон, боди, песочник</li>
          <li className="list-item">Безрукавка, жилет</li>
          <li className="list-item">Свитер, полувер, жакет</li>
          <li className="list-item">Пончо, болеро, накидка</li>
          <li className="list-item">Топ, ажурная кофточка</li>
          <li className="list-item">Платье, сарафан</li>
          <li className="list-item">Перчатки, варежки</li>
          <li className="list-item">Шарф, снуд, палантин</li>
          <li className="list-item">Юбка, штаны, шорты</li>
          <li className="list-item">Шапка, берет</li>
          <li className="list-item">Пальто, кардиган, </li>
          <li className="list-item">Носки, тапки</li>
          <li className="list-item">Вязание полным</li>
        </ul>
      </div>
      <Subtitle name={"Вязание для мужчин"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">Безрукавка, жилет</li>
          <li className="list-item">Свитер, полувер, жакет</li>
          <li className="list-item">Шапка, шарф, берет</li>
          <li className="list-item">Носки, тапки</li>
        </ul>
      </div>
      <Subtitle name={"Вязание для дома"}/>
      <div className="aside-left__list-subtitle">
        <ul>
          <li className="list-item">Покрывало, плед</li>
          <li className="list-item">Подушки</li>
          <li className="list-item">Коврики, сидушки</li>
          <li className="list-item">Салфетки, скатерти</li>
          <li className="list-item">Корзинки, шкатулки</li>
          <li className="list-item">Цветы</li>
          <li className="list-item">Вяжем к празднику</li>
          <li className="list-item">Игрушки</li>
          <li className="list-item">Вязание для животных</li>
          <li className="list-item">Другие полезные вещи</li>
        </ul>
      </div>
  </aside>
  )
}

export default Leftaside;