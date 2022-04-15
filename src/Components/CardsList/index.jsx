import React, { useState } from "react";
import ListItem from "./CardListItem";
import { NavLink } from "react-router-dom";

import ButtonClass from "../Navbar/ButtonClasses";
import ButtonCosts from "../Navbar/ButtonCosts";

import cards from "../cards.json";

import styles from "./styles.module.scss";
import logo from "../../images/logo.png";

const CardsList = () => {
  const [value, setValue] = useState("");
  const filteredcards = cards.filter(
    (card) =>
      card.name.toLowerCase().includes(value.toLowerCase()) &&
      card.hasOwnProperty("img") &&
      card.hasOwnProperty("cost") &&
      card.hasOwnProperty("text")
  );

  return (
    <div className={styles.container}>
      <div className={styles.filterWrapper}>
        <div className={styles.searchGroop}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="" loading="lazy" />
            </a>
          </div>
          <ButtonClass className="buttons" />
          <ButtonCosts className="buttons" />
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
        {filteredcards.map((card) => {
          return (
            <NavLink key={card.cardId} to={`/card/${card.cardId}`}>
              <ListItem card={card} id={card.cardId} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CardsList;
