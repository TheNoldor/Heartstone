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

const menuClasses: object = [
  {
    id: 1,
    title: "All classes",
    img: "https://u.to/nDEZHA",
  },
  {
    id: 2,
    title: "Demon hunter",
    img: "https://u.to/oTEZHA",
  },
  {
    id: 3,
    title: "Druid",
    img: "https://u.to/pTEZHA",
  },
  {
    id: 4,
    title: "Hunter",
    img: "https://u.to/qDEZHA",
  },
  {
    id: 5,
    title: "Mage",
    img: "https://u.to/rTEZHA",
  },
  {
    id: 6,
    title: "Palladin",
    img: "https://u.to/rzEZHA",
  },
  {
    id: 7,
    title: "Priest",
    img: "https://u.to/tDEZHA",
  },
  {
    id: 8,
    title: "Rogue",
    img: "https://u.to/tzEZHA",
  },
  {
    id: 9,
    title: "Shaman",
    img: "https://u.to/uzEZHA",
  },
  {
    id: 10,
    title: "Warlock",
    img: "https://u.to/vTEZHA",
  },
  {
    id: 11,
    title: "Warrior",
    img: "https://u.to/xzEZHA",
  },
  {
    id: 12,
    title: "General classes",
    img: "https://u.to/yzEZHA",
  },
];

const handleClick = () => {
  console.info(`Filter by classes`);
};

const ButtonClass = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (index: number = 1) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: { target: any }) => {
    // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="classes">
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <ButtonGroup
            className="buttonGroup"
            variant="contained"
            color="secondary"
            ref={anchorRef}
            aria-label="split button"
            min-width="40px"
          >
            <Button className="button" onClick={handleClick}>
              <img
                alt=""
                src={
                  Object.values(menuClasses).find(
                    (item: { id: number }) => item.id === selectedIndex
                  ).img
                }
              />

              {
                Object.values(menuClasses).find(
                  (item: { id: number }) => item.id === selectedIndex
                ).title
              }
            </Button>
            <Button
              className="button"
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
                      {Object.values(menuClasses).map(({ id, title, img }) => (
                        <MenuItem
                          className="menuItem"
                          key={id}
                          selected={id === selectedIndex}
                          onClick={(event) => handleMenuItemClick(id)}
                        >
                          <img
                            alt="title"
                            src={img}
                            style={{
                              borderRadius: "50%",
                              border: "solid rgba(255, 217, 0, 0.8) 0.15vw",
                              boxSizing: "content-box",
                              width: "2vw",
                              fontSize: "10px",
                            }}
                          />
                          {title}
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

export default ButtonClass;
