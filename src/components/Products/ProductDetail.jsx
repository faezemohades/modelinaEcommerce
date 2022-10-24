import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import data from '../../data/db.json'
import {useParams} from "react-router-dom"
import { useEffect } from "react";

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
  const classes = useStyles();
  const { id } = useParams();

  const product = data.products.find((item) => item.id === id);
  const {name,price,size,material,cover } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

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
            src={cover}
            alt=""
          />
        </Box>
        <Box padding="20px" marginTop="50px">
          <Box className={classes.title}>
            <Typography variant="h5">
           {name}
            </Typography>
          </Box>
          <Box className={classes.title}>
            <Typography variant="h5">{price}</Typography>
          </Box>
          <Box className={classes.text}>
            <Typography variant="h6"> مشخصات کلی محصول</Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              ابعاد :
            </Typography>
            <Typography variant="subtitle1"> {size} </Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
            <Typography variant="h6" marginLeft="5px">
              جنس :
            </Typography>
            <Typography variant="subtitle1">{material}</Typography>
          </Box>
          <Box className={classes.text} display="flex" alignItems="center">
           
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
