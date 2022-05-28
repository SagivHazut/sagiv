import React from "react";
import { useState } from "react";

import { Badge, Box, Button, Popover, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const ShoppingCartBox = (props) => {
  const { ShoppingCart } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (ShoppingCart.length !== 0) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // TODO: add handlePayButtonClick
  // TODO: add PopoverContent -> Table

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
        {/* TODO: Add Table */}
        <Button>Pay</Button>
      </Popover>
    </>
  );
};

export default ShoppingCartBox;
