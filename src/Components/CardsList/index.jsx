//import React, { Component }from "react";
//import { Click } from "./Clientslistitem";
//import { connect } from 'react-redux';
import React, { useState } from "react";
import ListItem from "./Cardslistitem";
import { NavLink } from "react-router-dom";
//import Checkbox from "@material-ui/core/Checkbox"; //'@mui/material/Checkbox';
//import AddAPhoto from "@material-ui/icons/AddAPhoto";
import ButtonClass from "../Navbar/ButtonClasses";

import cards from "../cards.json";
import ButtonCosts from "../Navbar/ButtonCosts";

const CardsList = () => {
  const [value, setValue] = useState("");

  const filteredcards = cards.filter((card) => {
    return (
      card.general.firstName.toLowerCase().includes(value.toLowerCase()) ||
      card.general.lastName.toLowerCase().includes(value.toLowerCase())
    );
  });

  return (
    <div className="Container">
      <div class="FilterWrapper">
        <div className="SearchGroop">
          <div className="Logo">
            <a href="/">
              <img
                src="https://d2vkoy1na2a6o6.cloudfront.net/images/logos/logo-rose-6ac85a09bf532a348c56002b9a9d7393d485677460a7d24c61be28bde93ecd11521a29ab5d1fed7b4646b6ec73c9dca1a85e8e82269e79f5a54ead2976682517.png"
                alt=""
                loading="lazy"
              />
            </a>
          </div>
          <ButtonClass />
          <ButtonCosts />
          <div className="Search">
            <input
              type="text"
              className="form-control"
              placeholder="First or Last name..."
              id="searchBar"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="CardsList">
        {filteredcards.map((card, id) => {
          return (
            <NavLink key={id} to={`/card/${id}`}>
              <ListItem card={card} id={id} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CardsList;
