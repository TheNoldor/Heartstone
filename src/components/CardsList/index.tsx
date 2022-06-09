import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import ListItem from "./CardListItem";
import ButtonClass from "../Navbar/ButtonClasses";
import ButtonCosts from "../Navbar/ButtonCosts";
import { CardsStoreTypes, ICard } from "../../redux/reducers/reposReducer";
import styles from "./styles.module.scss";
import logo from "../../images/logo.png";

export const CardsList = () => {
  const cardsStore = useSelector((state: CardsStoreTypes) => state);
  const [value, setValue] = useState("");

  const cards = cardsStore.cards;

  const filteredCards =
    cards.length > 0 &&
    cards.filter(
      (items: ICard) =>
        items?.img &&
        items?.text &&
        items?.cost &&
        `${items.name} ,${items.artist}, ${items.cost}`
          .toLowerCase()
          .includes(value.toLowerCase())
    );

  if (cards.length === 0) return <div>loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.filterWrapper}>
        <div className={styles.searchGroop}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="" loading="lazy" />
            </a>
          </div>
          <ButtonClass />
          <ButtonCosts />
          <div className={styles.search}>
            <input
              type="text"
              className="form-control"
              placeholder="Card name..."
              id="searchBar"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.cardsList}>
        {Object.values(filteredCards).map((card: ICard) => {
          return (
            <NavLink key={card.cardId} to={`/card/${card.cardId}`}>
              <ListItem card={card} key={card.cardId} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CardsList;
