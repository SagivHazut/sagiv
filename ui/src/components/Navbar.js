import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ margin: "0 auto" }}>
          <Button
            color="inherit"
            onClick={() => navigate("/home", { replace: true })}
          >
            home
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/admin", { replace: true })}
          >
            admin
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/stats", { replace: true })}
          >
            stats
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
