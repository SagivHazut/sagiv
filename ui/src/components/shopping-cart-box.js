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

  const itemsPrice = ShoppingCart.reduce((a, c) => a + 1 * c.price, 0);

  const handleClick = (event) => {
    if (ShoppingCart.length !== 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // TODO: add handlePayButtonClick
  // pay ->
  // 0. filter unique products DONE
  // 1. for each item unique products use axios to patch -> uniqueSoldCount
  // 2. for each item in shopping cart use axios to patch -> SoldCount
  // 3. clear shopping cart
  const handlePayButtonClick = () => {
    // const itemsSet = new Set(ShoppingCart)
    // ShoppingCart.forEach(item => {
    //   axios.patch(+1) SoldCount
    // });
    // itemsSet.forEach(item => {
    //   axios.patch(+1) uniqueSoldCount
    // });
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
              {ShoppingCart.map((item) => (
                <TableRow
                  key={item._id}
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
