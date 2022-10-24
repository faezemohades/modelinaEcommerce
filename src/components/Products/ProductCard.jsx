import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { cartActions } from "../../feature/cartSlice";

import { toast } from 'react-toastify';

function ProductCard({item}) {
  const { id, name, cover, price, size, material } =item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        cover,
        price,
      })
    );
    toast.success("محصول به سبد خرید شما اضافه شد")
  };
  return (
    <Box>
      <Card sx={{ maxWidth: 345 ,margin:"auto"}} key={id}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={cover} alt="cover " />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <Link
                to={`/products/${id}`}
                style={{ textDecoration: "none", color: "grey" }}
              >
                {name}
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {`${price} تومان`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" color="primary" onClick={addToCart}>
            <ShoppingCartSharpIcon />
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default ProductCard;
