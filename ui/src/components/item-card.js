import React from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ItemCard = (props) => {
  const { item, handleBuyButtonClick } = props;

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="item's image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ pb: 1 }} noWrap>
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            handleBuyButtonClick(item);
          }}
        >
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
