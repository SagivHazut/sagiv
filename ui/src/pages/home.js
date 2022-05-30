import { useState, useEffect } from "react";
import React from "react";

import { Box, Container, Grid } from "@mui/material";
import axios from "axios";

import { ShoppingCartBox } from "../components/shopping-cart-box";
import { ItemCard } from "../components/item-card";

const Home = () => {
  const [items, setItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {});
  }, []);

  const addItemToShoppingCart = (item) => {
    const currentShoppingCart = [...shoppingCart];

    currentShoppingCart.push(item);
    setShoppingCart(currentShoppingCart);
  };

  const clearShoppingCart = () => {
    setShoppingCart([]);
  };

  const itemsGrid = items.map((item, index) => (
    <Grid key={index} item xs={6} sm={4} md={3}>
      <ItemCard item={item} handleBuyButtonClick={addItemToShoppingCart} />
    </Grid>
  ));

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ mb: 2, ml: "auto" }}>
            <ShoppingCartBox
              ShoppingCart={shoppingCart}
              clearShoppingCart={clearShoppingCart}
            />
          </Box>
          <Grid container spacing={2}>
            {itemsGrid}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
