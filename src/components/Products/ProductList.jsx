import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import { styled } from "@mui/material/styles";
import data from "../../data/db.json";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "30px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductList() {
  return (
    <Box sx={{ height: "auto", marginTop: "150px" }}>
      <Box
        sx={{
          width: "100vw",
           display:"flex",
           justifyContent: "space-between",
        }}
      >
        <Grid
          item
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item sm={6} md={4} lg={3}>
              {data.products.map((item) => (
            <Item  key={item.id}>
                <ProductCard item={item}/>
            </Item>
              ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductList;
