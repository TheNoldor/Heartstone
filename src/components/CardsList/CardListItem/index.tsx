import CardDetails from "../../CardDetails/index";
import { ICard } from "../../../redux/reducers/reposReducer";

import styles from "./styles.module.scss";
import { useState } from "react";

export type CardItemType = {
  card: ICard;
};

const CardItem = ({ card }: CardItemType) => {
  //const img1 = card.img;

  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <div className={styles.card} onClick={() => setShowCard(true)}>
        <img className="CardImg" alt="" src={card.img} />
      </div>
      {showCard && (
        <CardDetails card={card} onClose={() => setShowCard(false)} />
      )}
    </>
  );
};

export default CardItem;
