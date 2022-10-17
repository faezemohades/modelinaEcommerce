import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
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
      <Box
        sx={{
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
        
          <Grid xs={12} sm={6} md={4} lg={3}>
            <Item>
              <ProductCard>1</ProductCard>
            </Item>
          </Grid>
         
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductList;
