import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { Link } from "react-router-dom";
import data from "../../data/db.json";
import { Box } from "@mui/system";

function ProductCard( ) {
  return (
    <Box>
      {data.products.map((item,index) =>(<Card sx={{ maxWidth: 345 }}  key={index}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={item.cover} alt="cover " />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            <Link to={`/productd/${item.id}`} style={{ textDecoration: "none", color: "grey" }}>{item.name}</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
  
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button size="small" color="primary">
            <ShoppingCartSharpIcon />
          </Button>
        </CardActions>
      </Card>))}
      
      </Box>  );
}

export default ProductCard;
