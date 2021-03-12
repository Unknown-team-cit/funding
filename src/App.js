import { Grid } from '@material-ui/core';
import './App.css';
import Cards from './components/Card';
import Register from './components/Register.jsx';

function App() {
  return (
    <div>
      <Grid direction='row'  container justify='center'>

      {/* <Cards heading='naveen' body='this body will have all the required contents' /> */}
      <Register/>
      </Grid>
    </div>
  );
}

export default App;
