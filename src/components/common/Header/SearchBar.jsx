import React from "react";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

import { Box, IconButton, InputBase } from "@mui/material";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  searchBox: {
    border: "0.5px solid #CCCCCC",
    padding: "5px",
    borderRadius: "3px",
    width: "80%",
  },
  searchBtn: {
    border: "0.5px solid #CCCCCC",
    backgroundColor: "#F0F0F0",
    borderRadius: "3px",
  },
}));

function SearchBar({searchTerm,setSearchTerm }) {
  const classes = useStyles();
  const submitHandler = (event) => {
    event.preventDefault();
    if (searchTerm === "") return;
    setSearchTerm("");
  };
  return (
    <Box component="form" className={classes.search} onSubmit={submitHandler}>
      <Box className={classes.searchBox}>
        <InputBase
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="جستجوی محصول"
          required
        ></InputBase>
      </Box>
      <Box className={classes.searchBtn}>
        <IconButton type="submit">
          <SearchIcon color="#F0F0F0" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SearchBar;
