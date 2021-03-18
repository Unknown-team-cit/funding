import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#ff1744",
    
  },
  button: {
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="sticky">
        <Toolbar>
          <img
            src="https://www.collegeinnovators.com/wp-content/uploads/2018/10/startup-png-22-300x223.png"
            alt="StartUP"
            width="80px"
            height="64px"
            id="image"
          />
          <Typography variant="h6" className={classes.title}></Typography>
          {!props.reg && (
            <Button className={classes.button} color="inherit">
              Register
            </Button>
          )}
          <Button className={classes.button} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;