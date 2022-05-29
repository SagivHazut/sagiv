import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CardDelete } from "../components/card-delete";
const Admin = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/cards/allCards")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {});
  }, []);

  const itemsGrid = items.map((item, index) => (
    <Grid key={index} item xs={6} sm={4} md={3}>
      <CardDelete item={item}></CardDelete>
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
          <Box sx={{ mb: 2, ml: "auto" }}></Box>
          <Grid container spacing={2}>
            {itemsGrid}
          </Grid>
        </Box>
      </Container>
      <Button
        size="large"
        variant="contained"
        sx={{ m: " 0 auto" }}
        onClick={() => navigate("/CardRegister", { replace: true })}
      >
        Add a new item
      </Button>
    </Box>
  );
};

export default Admin;
