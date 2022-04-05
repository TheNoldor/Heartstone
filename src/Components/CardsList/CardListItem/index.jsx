import React from "react";
import PropTypes from "prop-types";

import CardDetails from "../../CardDetails";

import styles from "./styles.module.scss";

const CardItem = ({ card }) => {
  const { avatar } = card.general;

  return (
    <div className={styles.card} onClick={() => CardDetails()}>
      <img className="CardImg" alt="" src={avatar} />
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};

export default CardItem;
