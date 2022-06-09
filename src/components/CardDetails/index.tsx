import { Portal } from "@mui/material";
import { NavLink } from "react-router-dom";

import { CARD_IMG_URL } from "../../constants/cards";
import { ICard } from "../../redux/reducers/reposReducer";

import styles from "./styles.module.scss";


type CardDetailsType = {
  card: ICard;
  onClose: () => void;
};

const CardDetails = ({ card, onClose }: CardDetailsType) => {

  if (!card) return <div>404</div>;

  return (
    <Portal>
      <div className={styles.cardDetailForm}>
        <div className={styles.closeButton} onClick={onClose}>
          <NavLink to={`/card/`}>X</NavLink>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.cardDetailsImage}>
            <div className={styles.cardDetails_View} data-src={card.img}>
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img src={card.img} alt="Card Name"></img>
                  </div>
                  <div className={styles.flipCardBack}>
                    <img src={CARD_IMG_URL} alt="Avatar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardDetailsInfo}>
            <h3>{card.name}</h3>
            <p>{card.flavor}</p>
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
    </Portal>
  );
};

export default CardDetails;
