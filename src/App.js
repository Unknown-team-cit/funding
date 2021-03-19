import { Grid } from '@material-ui/core';
import './App.css';
import Cards from './components/Card';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Register from './components/Register.jsx';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login/Login';


function App() {

  const details={CompanyName:'Company Name',Field:'field of work', Linkedin:'linked in link', Website:'company website', Ppt:'google link',InvestorContent:'content of investor', Domain:'domain contents'}

  return (
    <Router>

    <div>
      <Navbar />
      <Grid direction='row'  container justify='center'>
        <Route exact path='/dashboard/:id' ><Dashboard details={details}  /></Route>
        <Route exact path='/home' >
          <Cards heading='naveen' body='this body will have all the required contents' />
        </Route>
        <Route exact path='/register' ><Register/></Route>
        <Route exact path='/contact/:id' ><Contact/></Route>
        <Route exact path='/profile/:id' ><Profile/></Route>
        <Route exact path='/login'><Login/></Route>
      </Grid>
    </div>
    </Router>
  );
}

export default App;
