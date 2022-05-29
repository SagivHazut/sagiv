import React from "react";

import {
  Badge,
  Box,
  Button,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";

export const ShoppingCartBox = (props) => {
  const { ShoppingCart, clearShoppingCart } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const URL = "http://localhost:8181/api/cards/soldCount/";
  const URL12 = "http://localhost:8181/api/cards/uniqueSoldCount/";
  const UR1L = "http://localhost:8181/api/cards/card/";

  const itemsPrice = ShoppingCart.reduce((a, c) => a + 1 * c.price, 0);

  const handleClick = (event) => {
    if (ShoppingCart.length !== 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePayButtonClick = (item) => {
    const itemsSet = new Set(ShoppingCart);
    ShoppingCart.forEach((item) => {
      axios.get(`${UR1L}${item._id}`).then(({ data }) => {
        axios.patch(`${URL}${data._id}`, {
          soldCount: data.soldCount + 1,
        });
        console.log(item.soldCount);
      });
    });

    itemsSet.forEach((item) => {
      axios.get(`${UR1L}${item._id}`).then(({ data }) => {
        axios.patch(`${URL12}${item._id}`, {
          uniqueSoldCount: item.uniqueSoldCount + 1,
        });
        console.log(item.uniqueSoldCount);
      });
    });

    clearShoppingCart();
  };

  return (
    <>
      <Button
        variant="contained"
        endIcon={
          <Badge badgeContent={ShoppingCart.length} color="primary">
            <ShoppingCartIcon color="action" />
          </Badge>
        }
        onClick={handleClick}
        sx={{ bgcolor: "grey.400" }}
      >
        Shopping Cart
      </Button>
      <Popover
        id="shoppingCart"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableBody>
              {ShoppingCart.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="right">${item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
          <TableBody>
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                bgcolor: "grey.400",
              }}
            >
              <TableCell component="th" scope="row">
                Total price
              </TableCell>
              <TableCell align="right">${itemsPrice}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box sx={{ m: "5px" }}>
          <Button
            sx={{ ml: "auto", display: "flex" }}
            variant="contained"
            size="small"
            onClick={handlePayButtonClick}
          >
            Pay
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default ShoppingCartBox;
