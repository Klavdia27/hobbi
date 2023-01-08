import React, {Fragment, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {cardApi} from "../../shared/api/cardApi";

export const Filter = () => {
    const location = useParams();

    useEffect(() => {
        if (location) {
            const fetch = async () => {
                console.log(await cardApi.getCardByFilter(location.section, location.subsection))
            }

            fetch()

        }
    },[location]);

    return (
        <Fragment>
            <h1>Filter page</h1>
        </Fragment>
    )
}