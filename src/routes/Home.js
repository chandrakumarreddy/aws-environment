import styled from "@emotion/styled";
import { Add } from "@mui/icons-material";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.section`
  height: 100vh;
  background-color: #ddd;
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Typography color="inherit" variant="h6" component="h1">
            Welcome Jake
          </Typography>
        </Toolbar>
      </AppBar>
      <Box padding="4rem" textAlign="center">
        <Typography
          color="inherit"
          variant="h4"
          component="h1"
          sx={{ marginBottom: 1 }}
        >
          Create new environment
        </Typography>
        <Button
          variant="contained"
          disableElevation
          startIcon={<Add />}
          color="primary"
          onClick={() => navigate("/add")}
        >
          Add
        </Button>
      </Box>
    </Container>
  );
}
