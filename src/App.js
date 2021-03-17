import { Grid } from '@material-ui/core';
import './App.css';
import Cards from './components/Card';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register.jsx';

function App() {

  const details={CompanyName:'Company Name',Field:'field of work', Linkedin:'linked in link', Website:'company website', Ppt:'google link',InvestorContent:'content of investor', Domain:'domain contents'}

  return (
    <div>
      <Grid direction='row'  container justify='center'>
      <Dashboard details={details}  />
      {/* <Cards heading='naveen' body='this body will have all the required contents' />
      <Register/>
      <Contact/> */}
      </Grid>
    </div>
  );
}

export default App;
