import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
 import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
  import { Link } from "react-router-dom";
function ProductCard() {
  return (
    <Link to="/productd" style={{ textDecoration: "none", color: "grey" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              "https://limooshop.com/13575-large_default/%D8%B4%D8%A7%D9%84-%D9%85%D8%AC%D9%84%D8%B3%DB%8C-%D9%86%DA%AF%DB%8C%D9%86-%D8%AF%D8%A7%D8%B1-2446.jpg"
            }
            alt=" حریر ترک"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {" "}
              شال مخمل مشکی فندی
            </Typography>
            <Typography variant="body2" color="text.secondary">
              216000 هزار تومان
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
