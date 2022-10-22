import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import data from "../../data/db.json";

import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "30px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductList() {
  return (
    <Container sx={{ height: "auto", marginTop: "150px" }}>
      <Grid
        item
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ alignItems: "space-between", justifyContent: "space-between" }}
      >
        <Grid item sm={6} md={4} lg={3}>
          {data.products.map((item, index) => (
            <Item key={index}>
              <ProductCard item={item}/>
            </Item>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductList;
