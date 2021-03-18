import React,{useState} from 'react';
import { Button, Grid, Typography,TextField } from "@material-ui/core";
import makeStyles from './RegisterStyle'


function Register() {
    const classes=makeStyles();
    const [FormDetails, setFormDetails] = useState({})

    const onchangec=(e)=>{
        // var name=console.log(e.target.name);
        setFormDetails({...FormDetails,[e.target.name]:e.target.value})
        
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(FormDetails);
        
    }

    return (
        <Grid className={classes.body} justify='center' container>
            <Grid container spacing={3} justify='center' className={classes.grid} >
        
            <form onSubmit={onSubmit}>
            <Typography className={classes.header} variant='h5' gutterBottom>Register your company Here</Typography>
                
                <TextField name='CompanyName' onChange={onchangec} className={classes.textField} label='Company Name'  color="secondary"  fullWidth required /> 
                <TextField name='Password' onChange={onchangec} className={classes.textField} label='Password'  color="secondary" type='password' fullWidth required/> 
                <TextField name='NameofCeo' onChange={onchangec} className={classes.textField} label='Name of CEO'  color="secondary"  fullWidth required/>
                <TextField name='FeildOfWork' onChange={onchangec} className={classes.textField} label='Field of work'  color="secondary"  fullWidth required multiline rows={3}/>
                <TextField name='Linkedin' onChange={onchangec} className={classes.textField} label='Linkedin Link'  color="secondary"  fullWidth required/>
                <TextField name='CompanyWebsite' onChange={onchangec} className={classes.textField} label='Company Website'  color="secondary"  fullWidth />
                <TextField name='Email' onChange={onchangec} className={classes.textField} label='E-mail'  color="secondary"  fullWidth required type='email' />
                <TextField name='Contact' onChange={onchangec} className={classes.textField} label='Contact Number'  color="secondary"  fullWidth required type='tel'/>
                <TextField name='Country' onChange={onchangec} className={classes.textField} label='Country'  color="secondary"  fullWidth required/>
                <TextField name='State' onChange={onchangec} className={classes.textField} label='State'  color="secondary"  fullWidth required/>
                <TextField name='City' onChange={onchangec} className={classes.textField} label='City'  color="secondary"  fullWidth required/>
                <TextField name='SlideLink' onChange={onchangec} className={classes.textField} label='Google Slide Link'  color="secondary"  fullWidth/>
                <TextField name='InvestorContent' onChange={onchangec} className={classes.textField} label='Would you like to say something to your investors'  color="secondary"  fullWidth multiline rows={3}/><br/>
                <TextField name='Domain' onChange={onchangec} className={classes.textField} label='Domain'  color="secondary"  fullWidth required/>
                <Button  className={classes.button} color='secondary' type='submit' variant='contained'>Submit</Button>
            </form>

        
            </Grid>
            </Grid>
      
    )
}

export default Register
