import { Box } from "@mui/material";
import React from "react";
import Content from "../main/Content";
import Header from "../main/Header";

export default function Add() {
  return (
    <section>
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          py: 6,
          px: 4,
          bgcolor: "#eaeff1",
          minHeight: "calc(100vh - 48px)",
        }}
      >
        <Content />
      </Box>
    </section>
  );
}
