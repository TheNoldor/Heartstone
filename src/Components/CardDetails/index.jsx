import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import cards from "../cards.json";

const CardDetails = () => {
  const { id } = useParams();
  const { heroClass } = "";
  const [card, setCard] = useState(false);

  useEffect(() => {
    setCard(cards.find((item) => item.id === id));
    console.log("effect");
  }, [id]);

  if (!card) {
    return <div>loading</div>;
  }

  return (
    <div className="CardDetailForm">
      <div tabindex="-1" className="{content}">
        <div className="CloseButton">✕</div>
        <div className="CardDetails">
          <div className="CardDetailsImage">
            <a
              href="/card/"
              className="CardLayout__CardWrap-sc-1eiryq6-0 WgEFw"
            >
              <div className="CardDetails__View" src={card.general.avatar}>
                <img src={card.general.avatar} alt="Волна Бездны"></img>
              </div>
            </a>
          </div>
          <div className="CardDetailsInfo">
            <h3>Волна Бездны</h3>
            <p>Глубокие соболезнования всем жертвам.</p>
            <p>
              Наносит 4 ед. урона всем существам. Противник получает проклятие
              глубин.
            </p>
            <ul className="CardDetailsList">
              <li>
                Тип<span className="locale-space">&nbsp;</span>:
                <span className="value">Заклинание</span>
              </li>
              <li>
                Школа заклинаний<span className="locale-space">&nbsp;</span>:
                <span className="value">Тьма</span>
              </li>
              <li>
                Редкость<span className="locale-space">&nbsp;</span>:
                <span className="value">Эпическая</span>
              </li>
              <li>
                Набор<span className="locale-space">&nbsp;</span>:
                <span className="value">Путешествие в Затонувший город</span>
              </li>
              <li>
                Класс<span className="locale-space">&nbsp;</span>:
                <span className="value">
                  <a href={"/heroes/" + heroClass}>Чернокнижник</a>
                </span>
              </li>
              <li>
                Стоимость изготовления
                <span className="locale-space">&nbsp;</span>:
                <span className="value">400 / 1600 (Золотые)</span>
              </li>
              <li>
                Кол-во пыли при распылении
                <span className="locale-space">&nbsp;</span>:
                <span className="value">100 / 400 (Золотые)</span>
              </li>
              <li>
                Художник<span className="locale-space">&nbsp;</span>:
                <span className="value">L. Lullabi &amp; K. Turovec</span>
              </li>
              <li>Коллекционная</li>
            </ul>
            <p className="CardLinks">
              Связанные карты<span className="locale-space">&nbsp;</span>:
            </p>
            Проклятие глубин
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
