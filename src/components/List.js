import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import Card from "./CardDetails";

const List = ({cardList, onDelete}) => {


    return <section className="card__container">
            <div className="wrap">
                <ul className="card__list">
                    {cardList.map((item) => {
                    return <article className="card" key={item.id}>
                        <li>
                            <div className="card__content">
                                {item.avatar && <div className="card__img">
                                    <img src={`${item.avatar}`} alt="Avatar" />
                                            </div>}
                                                <h2 className="card__title">
                                                    <Link className="card__link" to={`/card/${item.id}`}>{item.name}</Link>
                                                </h2>
                            </div>
                        </li>
                    </article>
                 })}
            </ul>
        </div>
    </section>
}


export default List;
