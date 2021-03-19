import React,{useState} from 'react';
import { Button, Grid, Typography,TextField } from "@material-ui/core";
import makeStyles from './DashboardStyle'

function Dashboard({details}) {
    const classes=makeStyles();
    const [FormDetails, setFormDetails] = useState(details)
    

    const onchangec=(e)=>{
        // var name=console.log(e.target.name);
        e.preventDefault();
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
            <Typography className={classes.header} variant='h5' gutterBottom>{details.CompanyName.toUpperCase()} Dashboard</Typography>
                
                <TextField defaultValue={details.Field} name='FeildOfWork' onChange={onchangec} className={classes.textField} label='Field of work'  color="secondary" variant='filled' fullWidth  multiline rows={3}/>
                <TextField defaultValue={details.Linkedin} name='Linkedin' onChange={onchangec} className={classes.textField} label='Linkedin Link'  color="secondary"  fullWidth  variant='filled' multiline  />
                <TextField defaultValue={details.Website} name='CompanyWebsite' onChange={onchangec} className={classes.textField} label='Company Website'  color="secondary"  fullWidth variant='filled' multiline  />
                <TextField defaultValue={details.Ppt} name='SlideLink' onChange={onchangec} className={classes.textField} label='Google Slide Link'  color="secondary" variant='filled'  fullWidth multiline />
                <TextField defaultValue={details.InvestorContent} name='InvestorContent' onChange={onchangec} className={classes.textField} label='Would you like to say something to your investors' variant='filled'  color="secondary"  fullWidth multiline rows={3}/><br/>
                <TextField defaultValue={details.Domain} name='Domain' onChange={onchangec} className={classes.textField} label='Domain'  color="secondary"  fullWidth variant='filled' multiline />
                <Button  className={classes.Cbutton} color='primary' type='submit' variant='contained'>Change</Button>
                <Button href='/home' className={classes.button} color='secondary'  variant='contained'>Cancel</Button>
            </form>

        
            </Grid>
            </Grid>
    )
}

export default Dashboard
