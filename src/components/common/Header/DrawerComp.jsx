import React from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import DrawerItem from "./DrawerItem";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "grey",
  },
}));

function DrawerComp() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: {
            width: "45%",
            height: "50%",
            backgroundColor: "#F8F8F8",
            color: "#B5B5B5",
            marginTop: "65px",
          },
        }}
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <SearchBar />
        <Link
          onClick={() => setOpen(false)}
          to="/products"
          className={classes.link}        >
          <DrawerItem> محصولات </DrawerItem>
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/products"
          className={classes.link}        >
          <DrawerItem> فروش عمده </DrawerItem>
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/about"
          className={classes.link}        >
          <DrawerItem> درباره ما </DrawerItem>
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/contact"
          className={classes.link}        >
          <DrawerItem> ارتباط با ما </DrawerItem>
        </Link>
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuTwoToneIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
