import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
function ProductCard(props) {
  const{ id,name, price, cover, size }=props.item
  return (
    <Link to={`/products/${id}`} style={{ textDecoration: "none", color: "grey" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={cover} alt="cover " />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" color="primary">
            <ShoppingCartSharpIcon />
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default ProductCard;
