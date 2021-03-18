import React, { useState } from "react";
import { Button, Grid, Typography, TextField } from "@material-ui/core";
import makeStyles from "./RegisterStyle";

function Login() {
  const classes = makeStyles();
  const [FormDetails, setFormDetails] = useState({});

  const onchange = (e) => {
    setFormDetails({ ...FormDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //login stuff goes here
  };

  return (
    <Grid className={classes.body} justify="center" container>
      <Grid container spacing={3} justify="center" className={classes.grid}>
        <form onSubmit={onSubmit}>
          <Typography className={classes.header} variant="h5" gutterBottom>
            Login with your credentials
          </Typography>
          <TextField
            name="Email"
            onChange={onchange}
            className={classes.textField}
            label="E-mail"
            color="secondary"
            fullWidth
            required
            type="email"
          />
          <TextField
            name="Password"
            onChange={onchange}
            className={classes.textField}
            label="Password"
            color="secondary"
            type="password"
            fullWidth
            required
          />
          <Button
            className={classes.button}
            onChange={onchange}
            color="secondary"
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default Login;
