import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SearchBar from "../common/Header/SearchBar";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import data from "../../data/db.json";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { styled } from "@mui/material/styles";
import ReactPaginate from "react-paginate";
import "../../styles/pagination.css";


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

}));


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AllProducts() {
  const [searchTerm, setSearchTerm] = useState("");


  const classes = useStyles();
  
  const [pageNumber, setPageNumber] = useState(0);

const searchedProduct=data.products.filter((item) => {
  if (searchTerm.value === "") return item;
  if (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return item;
})

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

  return (
    <Box marginTop="200px">
      <Box className={classes.title}>
        <Typography variant="h4"> فروشگاه</Typography>
      </Box>
      <Box display="flex">
        {/* sidebar */}

        <Box flex={1} margin=" 0 auto">
          <Box sx={{ width: "100%" }}>
            <SearchBar
              sx={{ width: "100%" }}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
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
              دسته بندی محصولات :
            </Typography>
          </Box>
          <Box sx={{ minWidth: 120, direction: "rtl" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">محصولات</InputLabel>
              <Select
              defaultValue=""
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="محصولات"
               >
                <MenuItem value={"shal"}>شال</MenuItem>
                <MenuItem value={"scarf"}>روسری</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* feed */}

        <Grid
          item
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          flex={4}
          padding="20px"
        >
          {displayPage.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Item>
                <ProductCard item={item} />
              </Item>
            </Grid>
          ))}
        </Grid>
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
