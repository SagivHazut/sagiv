import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import CardUpdate from "./CardUpdate";
export const CardDelete = (props) => {
  const { item } = props;
  const [items, setItems] = useState([]);
  const URL = "http://localhost:8181/api/cards/";

  const handleUpdateUser = (id) => {
    let newCardsArr = items.filter((item) => item._id !== id);
    setItems(newCardsArr);
    axios.get("/cards/allCards").then(({ data }) => {
      setItems(data);
    });
  };

  const handleDeleteCard = (id) => {
    axios.delete(`${URL}${item._id}`).then((res) => {
      const newCardsArr = items.filter((item) => item._id !== id);
      setItems(newCardsArr);
    });
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt="item's image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.primary" sx={{ pb: 1 }} noWrap>
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price}
        </Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleDeleteCard(item._id)}
        >
          delete
        </Button>
        <CardUpdate
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          id={item._id}
          item={item}
          onUpdateUser={handleUpdateUser}
        ></CardUpdate>
      </CardContent>
    </Card>
  );
};

export default CardDelete;
