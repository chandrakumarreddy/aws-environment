import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import useEnvironmentsStore from "../store/environments";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 256;

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function EnvironmentList() {
  const navigate = useNavigate();
  const environments = useEnvironmentsStore((store) => store.environmentsList);
  return (
    <Drawer
      variant="permanent"
      PaperProps={{ style: { width: drawerWidth } }}
      sx={{ display: { sm: "block", xs: "none" } }}
    >
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          AWS Environment
        </ListItem>
        {environments.length ? (
          environments.map((environment) => (
            <Box
              key={environment.id}
              sx={{ bgcolor: "#101F33", color: "#fff" }}
            >
              <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                <ListItemButton
                  onClick={() => navigate(`/environment/${environment.id}`)}
                >
                  <DnsRoundedIcon fontSize="10" />
                  <ListItemText
                    sx={{ marginLeft: "12px", textTransform: "capitalize" }}
                  >
                    {environment.name}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Box>
          ))
        ) : (
          <Box
            sx={{
              bgcolor: "#101F33",
              color: "#fff",
              height: "300px",
              lineHeight: "300px",
            }}
            textAlign="center"
          >
            <Typography color="white" variant="p" component="h3">
              No Environments
            </Typography>
          </Box>
        )}
        {environments.length ? (
          <Box textAlign="center" marginTop="2rem">
            <Button
              sx={{
                borderRadius: 0,
                fontWeight: "bold",
                color: "#fff",
              }}
              variant="outlined"
              color="inherit"
              size="small"
              onClick={() => navigate("/", { replace: true })}
            >
              ADD NEW
            </Button>
          </Box>
        ) : null}
      </List>
    </Drawer>
  );
}
