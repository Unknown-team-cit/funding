import { Grid } from "@material-ui/core";
import "./App.css";
// import Cards from "./components/Card";
import Header from "./components/Header";
// import Login from "./components/Login";
import Register from "./components/Register.jsx";

function App() {
  return (
    <div>
      <Header reg={true} />
      <Grid direction="row" container justify="center">
        {/* <Cards heading='naveen' body='this body will have all the required contents' /> */}
        <Register />
        {/* <Login /> */}
      </Grid>
    </div>
  );
}

export default App;
