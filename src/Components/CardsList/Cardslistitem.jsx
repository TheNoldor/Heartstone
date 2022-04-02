import React from "react";
import PropTypes from "prop-types";
import CardDetails from "../CardDetails";

const CardItem = ({ card }) => {
  return (
    <div className="Card" onClick={() => CardDetails()}>
      <img alt="" src={card.general.avatar} />
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};

export default CardItem;
