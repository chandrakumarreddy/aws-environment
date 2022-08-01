import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setEnvironmentsData } from "../store/env";

export default function CreateEnvironment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((s) => ({ ...s, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEnvironmentsData({ name: data.name, data }));
    navigate("/", { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Name"
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            onBlur={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="profile"
            name="profile"
            label="AWS_Profile"
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            onBlur={handleChange}
          />
          <Typography variant="inherit" color="textSecondary"></Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="s3_url"
            name="s3_url"
            label="Storage Bucket S3 URL"
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            onBlur={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rpu"
            name="rpu"
            label="Root Prod URL"
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            onBlur={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="adp"
            name="adp"
            label="Admin Prod URL"
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            onBlur={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="adk"
            name="adk"
            label="Admin Prod KEY"
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <br />
        </Grid>
      </Grid>
      <Box textAlign="right">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          type="submit"
          sx={{ fontWeight: "bold", borderRadius: 0 }}
        >
          SAVE
        </Button>
      </Box>
    </form>
  );
}
