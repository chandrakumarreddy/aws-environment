import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import CreateEnvironment from "./CreateEnvironment.js";
import { Box, Button } from "@mui/material";

export default function Content(props) {
  return (
    <Paper
      sx={{
        maxWidth: 936,
        margin: "auto",
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      >
        <Box display="flex" justifyContent="space-between" padding="1rem">
          <Typography color="inherit" variant="h6" component="h6">
            Properties
          </Typography>
        </Box>
      </AppBar>
      <Box sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        <CreateEnvironment />
      </Box>
    </Paper>
  );
}
