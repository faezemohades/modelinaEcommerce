import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import data from "../../data/db.json";

import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductList() {

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
      item
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.products.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <ProductCard item={item} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;
