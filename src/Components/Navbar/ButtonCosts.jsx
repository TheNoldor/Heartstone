import React from "react";
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

const menuCosts = [
  {
    id: 1,
    title: "Any cost",
  },
  {
    id: 2,
    title: "Mana:0",
  },
  {
    id: 3,
    title: "Mana:1",
  },
  {
    id: 4,
    title: "Mana:2",
  },
  {
    id: 5,
    title: "Mana:3",
  },
  {
    id: 6,
    title: "Mana:4",
  },
  {
    id: 7,
    title: "Mana:5",
  },
  {
    id: 8,
    title: "Mana:6",
  },
  {
    id: 9,
    title: "Mana:7",
  },
  {
    id: 10,
    title: "Mana:8",
  },
  {
    id: 11,
    title: "Mana:9",
  },
  {
    id: 12,
    title: "Mana:10+",
  },
];

const ButtonCosts = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${menuCosts[selectedIndex]}`);
  };

  const handleMenuItemClick = (index) => {
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
    <div className="cost">
      <Grid className="grid" container direction="column" alignItems="center">
        <Grid className="grid" item xs={12}>
          <ButtonGroup
            className="buttonGroup"
            variant="contained"
            color="secondary"
            ref={anchorRef}
            aria-label="split button"
            min-width="40lapx"
          >
            <Button className="button" onClick={handleClick}>
              <img alt="title" src="https://u.to/zzEZHA" />
              {menuCosts.find((item) => item.id === selectedIndex).title}
            </Button>
            <Button
              className="button"
              color="primary"
              size="small"
              aria-controls={open ? "split-button-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <ArrowDropDownCircleOutlined />
            </Button>
          </ButtonGroup>
          <Popper
            className="popper"
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                className="grow"
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper className="paper">
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList className="menuList" id="split-button-menu">
                      {menuCosts.map(({ id, title }) => (
                        <MenuItem
                          className="menuItem"
                          key={id}
                          selected={id === selectedIndex}
                          onClick={(event) => handleMenuItemClick(event, id)}
                        >
                          <img alt="title" src="https://u.to/zzEZHA" /> {title}
                        </MenuItem>
                      ))}
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

export default ButtonCosts;
