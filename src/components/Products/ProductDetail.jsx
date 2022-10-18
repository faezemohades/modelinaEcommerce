import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import data from '../../data/db.json'
import {useParams} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  title: {
    margin: "10px",
  },
  text: {
    margin: "10px",
    color: theme.palette.common.grey,
  },
  button: {
    padding: "10px",
  },
}));

function ProductDetail() {

  const {productId} = useParams()
  const thisProduct = data.products.find(prod => prod.id === productId)

  const classes = useStyles();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/finalcart";
    navigate(path);
  };
  return (
    <Box marginTop="150px">
      <Box
        marginTop="50px"
        sx={{ display: "flex", justifyContent: "center", paddingX: "20px" }}
        flexDirection={{ xs: "column", md: "column", lg: "row" }}
        alignItems={{ xs: "center", md: "center", lg: "self-start" }}
      >
        <Box>
          <img
            width="90%"
            src="https://limooshop.com/13575-large_default/%D8%B4%D8%A7%D9%84-%D9%85%D8%AC%D9%84%D8%B3%DB%8C-%D9%86%DA%AF%DB%8C%D9%86-%D8%AF%D8%A7%D8%B1-2446.jpg"
            alt=""
          />
        </Box>
        <Box padding="20px" marginTop="50px">
          <Box className={classes.title}>
            <Typography variant="h5">
           {data.name}
            </Typography>
          </Box>
          <Box className={classes.title}>
            <Typography variant="h5"> 316000 تومان </Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="h6"> مشخصات کلی محصول</Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              ابعاد :
            </Typography>
            <Typography variant="subtitle1"> 70*2 </Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              جنس :
            </Typography>
            <Typography variant="subtitle1"> کشمیر،نخ </Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              فصل :
            </Typography>
            <Typography variant="subtitle1"> پاییز،زمستان </Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              جزییات :{" "}
            </Typography>
            <Typography variant="subtitle1">
              {" "}
              سبک و راحت ، ایستایی مناسب روی سر
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            sx={{ marginTop: "20px", marginX: "20px" }}
          >
            <Box display="flex" marginLeft="20px">
              <Box
                sx={{
                  border: "1px solid grey",
                  width: "25px",
                  padding: "2px 5px",
                  cursor: "pointer",
                }}
              >
                <AddIcon />
              </Box>
              <Box
                sx={{
                  border: "1px solid grey",
                  width: "20px",
                }}
                component="div"
              >
                <Typography padding="5px">5</Typography>
              </Box>
              <Box
                sx={{
                  border: "1px solid grey",
                  width: "25px",
                  padding: "2px 5px",
                  cursor: "pointer",
                }}
              >
                <RemoveIcon />
              </Box>
            </Box>
            <Box>
              <Button
                onClick={routeChange}
                sx={{ padding: "10px 15px", color: "white" }}
                variant="contained"
              >
                افزودن به سبد خرید
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetail;
