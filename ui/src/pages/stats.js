import React from "react";
import { Box, Container, Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import CardStats from "../components/card-stats";

const Stats = (props) => {
  const [items, setItems] = useState([]);
  const [soldCount, setSoldCount] = useState(props.soldCount);
  const [uniqueSoldCount, setUniqueSoldCount] = useState(props.uniqueSoldCount);

  let dataCounter = items.filter((item) => {
    return item.uniqueSoldCount > 1;
  });

  let dataSoldCount = items.filter((item) => {
    return item.soldCount > 1;
  });
  let dataDate = items.filter((item) => {
    return item.createdAt;
  });

  useEffect(() => {
    axios
      .get("/cards/allCards", soldCount, uniqueSoldCount)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {});
  }, []);

  const top5 = dataSoldCount.map((item, index) => (
    <Grid key={index} item xs={6} sm={4} md={2.4} sx={{ m: "auto" }}>
      <CardStats item={item} />
    </Grid>
  ));
  const uniqueTop5 = dataCounter.map((item, index) => (
    <Grid key={index} item xs={6} sm={4} md={2.4} sx={{ m: "auto" }}>
      <CardStats item={item} />
    </Grid>
  ));
  const Days = dataDate.map((item, index) => (
    <Grid key={index} item xs={6} sm={4} md={2.4} sx={{ m: "auto" }}>
      <CardStats item={item} />
    </Grid>
  ));

  console.log(dataDate);
  return (
    <>
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        {" "}
        top 5 products{" "}
      </h1>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "30vh",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 2, ml: "auto" }}></Box>
            <Grid container spacing={2}>
              {top5}
            </Grid>
          </Box>
        </Container>
      </Box>
      <h1 style={{ margin: "0 auto", textAlign: "center" }}>
        {" "}
        5 Unique sold products.{" "}
      </h1>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "30vh",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 2, ml: "auto" }}></Box>
            <Grid container spacing={2}>
              {uniqueTop5}
            </Grid>
          </Box>
        </Container>
      </Box>
      <h1 style={{ margin: "0 auto", textAlign: "center" }}> past 5 days </h1>
      <Box
        component="main"
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          minHeight: "30vh",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ mb: 2, ml: "auto" }}></Box>
            <Grid container spacing={2}>
              {Days}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Stats;
