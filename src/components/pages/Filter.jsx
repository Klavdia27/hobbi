import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {cardApi} from "../../shared/api/cardApi";
import ItemCard from "../ItemCard/ItemCard";
import {useDispatch} from "react-redux";
import Url from "../../helpers/url";

export const Filter = () => {
    const location = useParams();
    const [cards, setCards] = useState(null)
    const dispatch = useDispatch();

    const addCount = () => {
        dispatch({type:"ADD_COUNT", payload: 1})
    }

    useEffect(() => {
        if (location) {
            const fetch = async () => {
                const section = Url.getSectionFromUrl(location.section)
                const subsection = Url.getSubSectionFromUrl(location.section, location.subsection)
                setCards(await cardApi.getCardByFilter(section, subsection))
            }

            fetch()
        }
    },[location]);

    return (
        <div>
            <div>
                <h1>Filter page</h1>
            </div>

            <div className="grid-container">
                {cards && cards.map(blog =>
                    <Link to={`/pagecard/${blog.id}`} onClick={() => addCount()}>
                        <ItemCard key={blog.id} blog={blog}/>
                    </Link>
                )}
            </div>

            {cards && cards.length === 0 && <p>Данных нет</p>}
        </div>
    )
}