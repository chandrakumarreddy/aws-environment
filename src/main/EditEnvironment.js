import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  setEdit,
  setEnvironmentsData,
  updateEnvironment,
} from "../store/env";

const initialData = {
  name: "",
  profile: "",
  s3_url: "",
  rpu: "",
  adp: "",
  adk: "",
};

export default function EditEnvironment(props) {
  const { environment } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const edit = useSelector((store) => store.envs.edit);
  const [data, setData] = useState(() => initialData);
  useEffect(() => {
    setData(environment);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
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
            label={data.name ? "" : "Name"}
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            value={data.name}
            onChange={handleChange}
            disabled={!edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="profile"
            name="profile"
            label={data.profile ? "" : "AWS_Profile"}
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            value={data.profile}
            onChange={handleChange}
            disabled={!edit}
          />
          <Typography variant="inherit" color="textSecondary"></Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="s3_url"
            name="s3_url"
            label={data.s3_url ? "" : "Storage Bucket S3 URL"}
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            value={data.s3_url}
            onChange={handleChange}
            disabled={!edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rpu"
            name="rpu"
            label={data.rpu ? "" : "Root Prod URL"}
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            value={data.rpu}
            onChange={handleChange}
            disabled={!edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="adp"
            name="adp"
            label={data.adp ? "" : "Admin Prod URL"}
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            value={data.adp}
            onChange={handleChange}
            disabled={!edit}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="adk"
            name="adk"
            label={data.adk ? "" : "Admin Prod KEY"}
            fullWidth
            margin="dense"
            autoComplete="off"
            autoCapitalize="off"
            value={data.adk}
            onChange={handleChange}
            disabled={!edit}
          />
        </Grid>
        <Grid item xs={12}>
          <br />
        </Grid>
      </Grid>
      <Box display="flex" justifyContent={edit ? "space-between" : "flex-end"}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          type="button"
          sx={{ fontWeight: "bold", borderRadius: 0, marginRight: "16px" }}
          onClick={() => {
            if (edit) {
              dispatch(deleteItem({ id: data.id }));
              navigate("/", { replace: true });
            }
          }}
        >
          {edit ? "DELETE" : "API KEYS"}
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          type="button"
          sx={{ fontWeight: "bold", borderRadius: 0 }}
          onClick={() => {
            if (edit) {
              dispatch(setEdit(false));
              dispatch(updateEnvironment({ id: +id, data }));
            } else {
              navigate("subscriptions");
            }
          }}
        >
          {edit ? "SAVE" : "DEFAULT SUBSCRIPTIONS"}
        </Button>
      </Box>
    </form>
  );
}
