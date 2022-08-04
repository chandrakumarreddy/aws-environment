import { Button, Checkbox, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetchEnvironmentData from "../hooks/useFetchEnvironmentData";
import { Add, Delete, Edit, PersonPinCircle } from "@mui/icons-material";

function createData(name, subscribe, publishes, version) {
  return { name, subscribe, publishes, version };
}

const rows = [
  createData("Greg", "", "listing | web", 1),
  createData("env copy avc", "contact | lead", "", 1),
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
              <Item item={row} key={row.name} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const list = [
  "award",
  "contact",
  "lead",
  "listing",
  "marketing",
  "profile",
  "servicearea",
  "website",
  "franchise",
];

const Item = ({ item }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
        ":hover": { backgroundColor: "lightblue" },
      }}
    >
      <TableCell component="th" scope="row">
        {item.name}
      </TableCell>
      <TableCell display="flex">
        <Box display="flex">
          <span>{item.subscribe}</span>
          {item.subscribe && (
            <Box display="flex">
              <Button
                onClick={handleClick}
                id="edit-subscription"
                sx={{ padding: 0, margin: 0, minWidth: "24px", width: "24px" }}
              >
                <Edit
                  fontSize="8px"
                  sx={{ marginLeft: "4px", cursor: "pointer" }}
                />
              </Button>
              <Menu
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{ borderRadius: 0 }}
              >
                {list.map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      padding: "0 8px",
                      fontSize: "12px",
                      width: "fit-content",
                    }}
                  >
                    <Checkbox
                      size="8px"
                      aria-label={item}
                      sx={{ padding: 0, marginRight: "8px" }}
                    >
                      {item}
                    </Checkbox>
                    <span>{item}</span>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Box>
      </TableCell>
      <TableCell>{item.publishes}</TableCell>
      <TableCell>
        <span>{item.version}</span>
        <Button
          onClick={() => {}}
          padding="0"
          margin="0"
          width="24px"
          minWidth="24px"
        >
          <Delete
            fontSize="8px"
            sx={{ marginLeft: "4px", cursor: "pointer" }}
          />
        </Button>
      </TableCell>
    </TableRow>
  );
};
