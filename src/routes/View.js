import { CloseOutlined } from "@mui/icons-material";
import { AppBar, Box, Button, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFetchEnvironmentData from "../hooks/useFetchEnvironmentData";
import EditEnvironment from "../main/EditEnvironment";
import Header from "../main/Header";
import { setEdit } from "../store/env";

const Content = (props) => {
  const { environment } = props;
  const edit = useSelector((store) => store.envs.edit);
  const dispatch = useDispatch();
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
            {edit ? `EDIT Environment ${environment.name}` : "Properties"}
          </Typography>
          <Button
            sx={{
              borderRadius: 0,
              fontWeight: "bold",
            }}
            variant="outlined"
            color="inherit"
            size="small"
            type="button"
            onClick={() => {
              dispatch(setEdit(!edit));
            }}
          >
            {edit ? <CloseOutlined /> : "EDIT"}
          </Button>
        </Box>
      </AppBar>
      <Box sx={{ my: 5, mx: 2 }} color="text.secondary" align="center">
        <EditEnvironment environment={environment} />
      </Box>
    </Paper>
  );
};

export default function View() {
  const dispatch = useDispatch();
  const environment = useFetchEnvironmentData();
  useEffect(() => {
    return () => {
      dispatch(setEdit(false));
    };
  }, [environment]);
  return (
    <section>
      <Header title={environment?.name} />
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
        <Content showEditButton environment={environment} />
      </Box>
    </section>
  );
}
