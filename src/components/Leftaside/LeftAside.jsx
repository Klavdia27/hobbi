import React from 'react';
import './Leftaside.scss';
import Subtitle from "../Subtitle/Subtitle.jsx";
import {filter} from "../../shared/data/filter";
import {Link} from "react-router-dom";
import Url from "../../helpers/url";

function Leftaside() {
  return (
    <aside className="aside-left">
        {filter.map(item => (
            <div key={item.title}>
                <Subtitle name={item.title}/>

                <div className="aside-left__list-subtitle">
                    <ul>
                        {item.items.map(obj => (
                            <Link key={obj.title} to={Url.getCorrectUrl(item.title, obj.title)}>
                                <li key={obj.title} className="list-item">{obj.title}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
  </aside>
  )
}

export default Leftaside;