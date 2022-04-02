//import React, { Component }from "react";
//import { Click } from "./Clientslistitem";
//import { connect } from 'react-redux';
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import React from "react";
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import Popper from "@material-ui/core/Popper";
// import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";

const menuClasses = [
  {
    id: 1,
    title: "Все классы",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/class/icon_class_all-6964ad24bb858e15c61243fc19943c1ba8cc7d348f9bf36232587f1f5e089277e24e303a1c198e02e8adb751a86d44890ab62a1a189b9cbea3b4f17d7da3eba7.png",
  },
  {
    id: 2,
    title: "Охотник на демонов",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_demonhunter-4b00b9cccbcaf8c03253cd416fe4dba7cf80d80747e497a47e8637dd79d33bb92b105852c9b5ccdc34ff689416342533892a7575220b5705fda474b120d5c60e.png",
  },
  {
    id: 3,
    title: "Друид",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_druid-5df4afa2dbbb5d6e2c5563a28aa28ede24f19c43f3ea2e7d5331371c9665d3fe4fbca8cd5e68698304fb2ca0bd42b4ba9d857adcb160e3f3ed32948b4f1e64de.png",
  },
  {
    id: 4,
    title: "Охотник",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_hunter-10f8f24c8a67e11ac8f4de974a408ea68cf7c08594a3d1311fa24c4c90804af546b8a919af80ddc7945e35d8bcf733b7cdb537e82a853c3e2da49df9aaa23961.png",
  },
  {
    id: 5,
    title: "Маг",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_mage-28137a4f9b68cfec519dd0af3ed848ee3be9a995240231653795db578060bf72d5c1dc2b2b2e9f6dd1de05d764b277530cd61b9e23161cef3435c33092a95cd4.png",
  },
  {
    id: 6,
    title: "Палладин",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_paladin-6265da99f36270ab63da802047556b1c59bacdb2252c08cc43533ad6b53ece0e67ce3272ad46da1e6c7df1d182f719a163be941d09d99212eedb850fac2a976d.png",
  },
  {
    id: 7,
    title: "Жрец",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_priest-56ec33ba2d70cce01ee181603275bc6f661395455300fb94fc9b8b54f843b3177ebe37cd2711bcc8d781d9c680b56bf3db6dd1a7016cec25df6d4a31357d0e76.png",
  },
  {
    id: 8,
    title: "Разбойник",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_rogue-4f812cca57fb300bc123c1d3ab17667ad35b197152ab53fe591b15ceffcb3233ac115e9024040a8ad75a20cd447f2507b55084e30b179a14486df34f2b97f557.png",
  },
  {
    id: 9,
    title: "Шаман",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_shaman-071c3aac9153de94aed10e43abe1f7d7c8cf4db3ec9705ccadac8d7ec27cfc248df6af6babb3179ba951366259510974cf48f437551bf9ff0e341bdc00189bf3.png",
  },
  {
    id: 10,
    title: "Чёрнокнижник",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_warlock-5f40b4c9da0ba2e227f0580b14db2f192353ded2821fe0fe377ca7585a08b54889e7ca3dc5064e9279679175985da1d5ec5bab7da5c0aee9d67bdeca026968dd.png",
  },
  {
    id: 11,
    title: "Воин",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_small_warrior-7dd1c0fd1e33d8d4c812aff1bf7e778701f5aee6e43840eb06b9600f87561c6fc909c339c2b2d1da1a42eac4303278fb054a615912250fb5493179d4a80ccd1c.png",
  },
  {
    id: 12,
    title: "Общие",
    img: "https://d2q63o9r0h0ohi.cloudfront.net/images/icons/class/icon_class_neutral-e836ab9e0aa9b3f8b9554ff90febed749e0de75b7fde02e1c6f31334931785e1fb7405651ba85e74364cd44112d5157e78ee436e558325b2880b08a8c73d3695.png",
  },
];

const ButtonClass = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked `);
    console.info(`You clicked `);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="Classes">
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            color="secondary"
            ref={anchorRef}
            aria-label="split button"
            min-width="40px"
          >
            <Button onClick={handleClick}>
              {menuClasses.find((item) => item.id === selectedIndex).title}
            </Button>
            <Button
              color="primary"
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownCircleOutlined />
            </Button>
          </ButtonGroup>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList id="split-button-menu">
                      {
                        /* {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, index)}
                        >
                          <img alt="" src={options1[index]} />
                          {option}
                        </MenuItem>
                      ))} */
                        menuClasses.map(({ id, title, img }) => (
                          <MenuItem
                            key={id}
                            selected={id === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, id)}
                          >
                            <img alt="" src={img} />
                            {title}
                          </MenuItem>
                        ))
                      }
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonClass;
