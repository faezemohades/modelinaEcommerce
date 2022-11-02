import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SearchBar from "../pages/Home/SearchBar";
import data from "../../data/db.json";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { styled } from "@mui/material/styles";
import ReactPaginate from "react-paginate";
import "../../styles/pagination.css";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "gray",
    backgroundColor: "#FBFBFB",
    paddingTop: "20px",
    textAlign: "center",
    marginTop: "70px",
    width: "100%",
    paddingBottom: "20px",
  },
  feedtitle: {
    color: "gray",
    backgroundColor: "#FBFBFB",
    paddingTop: "10px",
    textAlign: "center",
    width: "98%",
    paddingBottom: "10px",
    marginRight: "20px",
    marginBottom: "10px",
  },

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AllProducts() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(data.products);

  useEffect(() => {
    if (category === "All") {
      setAllProducts(data.products);
    }

    if (category === "shal") {
      const filteredProducts = data.products.filter(
        (item) => item.category === "شال"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "scarf") {
      const filteredProducts = data.products.filter(
        (item) => item.category === "روسری"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

 const searchedProduct = allProducts.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    }  
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSearch =(e)=>{
const searchTerm=e.target.value;
const searchedProducts=allProducts.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase()))
setAllProducts(searchedProducts)
  }

  return (
    <Box marginTop="200px" width="90vw">
      <Box className={classes.title}>
        <Typography variant="h4"> فروشگاه</Typography>
      </Box>
      <Box  sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        alignItems={{ xs: "center", md: "center", lg: "self-start" }}>
        {/* sidebar */}

        <Box flex={1} margin="20px">
          <Box sx={{ width: "100%" }}>
          

          <Box  className={classes.search} >
      <Box className={classes.searchBox}>
        <InputBase
            placeholder="جستجوی محصول"
            required
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        ></InputBase>
      </Box>
      <Box className={classes.searchBtn}>
        <IconButton  >
          <SearchIcon color="#F0F0F0" />
        </IconButton>
      </Box>
    </Box>
          </Box>

          {/* category */}
          <Box
            sx={{
              margin: "30px 10px",
              backgroundColor: "#F0F0F0",
              padding: "10px",
            }}
          >
            <Typography variant="subtitle1" textAlign="center">
              دسته بندی محصولات
            </Typography>
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}>
            <Button
              href="#text-buttons"
              style={{ color: "grey", fontSize: "18px" }}
              onClick={() => setCategory("All")}
            >
              همه
            </Button>
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}>
            <Button
              href="#text-buttons"
              style={{ color: "grey", fontSize: "18px" }}
              onClick={() => setCategory("shal")}
            >
              شال
            </Button>
          </Box>
          <Box sx={{ borderBottom: "1px solid grey" }}>
            <Button
              href="#text-buttons"
              style={{ color: "grey", fontSize: "18px" }}
              onClick={() => setCategory("scarf")}
            >
              روسری
            </Button>
          </Box>
        </Box>

        {/* feed */}

        {searchedProduct ? (
          <Grid
            padding="20px"
            item
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            flex={4}
          >
            {displayPage.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Item>
                  <ProductCard item={item} />
                </Item>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            padding="20px"
            item
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            flex={4}
          >
            {allProducts.map((item) => (
              <Grid item xs={2} sm={4} md={4} key={item.id}>
                <Item>
                  <ProductCard item={item} />
                </Item>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* pagination */}
      <Box>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"<"}
          nextLabel={">"}
          containerClassName=" paginationBttns "
        />
      </Box>
    </Box>
  );
}

export default AllProducts;
