import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetchEnvironmentData from "../hooks/useFetchEnvironmentData";
import { Add } from "@mui/icons-material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Greg", "", "listing|web", 1),
  createData("env copy avc", "contact|lead", "", 1),
];

export default function Subscriptions() {
  useFetchEnvironmentData();
  return (
    <Box padding="2rem" maxWidth="800px" margin="0 auto">
      <Box display="flex" justifyContent="space-between">
        <Typography color="inherit" variant="h5" component="h3">
          Default Subscriptions
        </Typography>
        <Button
          variant="contained"
          disableElevation
          startIcon={<Add />}
          color="primary"
          sx={{ borderRadius: 0 }}
        >
          Add Subscription
        </Button>
      </Box>
      <TableContainer
        component={Paper}
        maxWidth="650px"
        sx={{ marginTop: "24px", borderRadius: 0, border: "1px solid #363636" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>App</TableCell>
              <TableCell>Subscribes</TableCell>
              <TableCell>Publishes</TableCell>
              <TableCell>Version</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
