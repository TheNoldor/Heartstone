import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CARD_IMG_URL } from "../../constants/cards";

import styles from "./styles.module.scss";

const CardDetails = () => {
  const { cards } = useSelector((state) => state);
  const { cardId } = useParams();
  const [card, setCard] = useState(false);

  useEffect(() => {
    setCard(cards.find((item) => item.cardId === cardId));
  }, [cards, cardId]);

  return (
    <div className={styles.cardDetailForm}>
      <NavLink to={"/"}>
        <div className={styles.closeButton}> X </div>
      </NavLink>
      <div tabindex="-1" className="{content}">
        <div className={styles.cardDetails}>
          <div className={styles.cardDetailsImage}>
            <div className={styles.cardDetails_View} src={card.img}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div class={styles.flipCardFront}>
                    <img src={card.img} alt="Card Name"></img>
                  </div>
                  <div className={styles.flipCardBack}>
                    <img img src={CARD_IMG_URL} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardDetailsInfo}>
            <h3>{card.name}</h3>
            <p>{card.flavor}</p>
            <p>{card.text}</p>
            <ul className={styles.cardDetailsList}>
              <li>
                <span className="localeSpace">Type: </span>:
                <span className="value">{card.type}</span>
              </li>
              <li>
                <span className="localeSpace">Rarity: </span>:
                <span className="value">{card.rarity}</span>
              </li>
              <li>
                <span className="localeSpace">Set: </span>:
                <span className="value">{card.cardSet}</span>
              </li>
              <li>
                <span className="localeSpace">Class: </span>:
                <span className="value">
                  <a href={"/heroes/" + card.playerClass}>{card.playerClass}</a>
                </span>
              </li>
              <li>
                <span className="localeSpace">Cost to Craft: </span>:
                <span className="value">{card.cost}</span>
              </li>
              <li>
                <span className="localeSpace">Disenchanting Yield: </span>:
                <span className="value">100 / 400 (Золотые)</span>
              </li>
              <li>
                <span className="localeSpace">Artist: </span>:
                <span className="value">{card.artist}</span>
              </li>
              <li>
                <span className="localeSpace">Collectible: </span>:
                <span className="value">{card.collectible}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
