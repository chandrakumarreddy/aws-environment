import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const lightColor = "rgba(255, 255, 255, 0.7)";

function Header(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h6" component="h6">
                {props.title} Environment
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  borderColor: lightColor,
                  borderRadius: 0,
                  fontWeight: "bold",
                }}
                variant="outlined"
                color="inherit"
                size="small"
                onClick={() => navigate("/", { replace: true })}
              >
                ADD NEW
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
