import React,{useState} from 'react'
import { Button, Grid, Typography,TextField, } from '@material-ui/core'
import makeStyles from './ContactStyle'


function Contact() {
    const [messages, setMessages] = useState({})
    const onChange=(e)=>{
        setMessages({...messages,[e.target.name]:e.target.value})
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(messages);
    }


    const classes= makeStyles();
    return (
        <Grid className={classes.body} container justify='center'>

        <Grid className={classes.paper} container justify='center'>
            <form onSubmit={onSubmit}>

                <Typography  className={classes.heading} variant='h5' gutterBottom>Contact This Company</Typography>
                <TextField onChange={onChange} name='InvestorName'  className={classes.input} label='Name'  color="secondary"  fullWidth required variant='outlined' />
                <TextField onChange={onChange} name='InvestorContact' className={classes.input} label='Contact Number'  color="secondary"  fullWidth required variant='outlined' />
                <TextField onChange={onChange} name='Message' className={classes.input} label='Your Message'  color="secondary" multiline rows={4}  fullWidth require variant='outlined' required />
                <Button type='submit' color='secondary' variant='contained' className={classes.button}>Send</Button>
            </form>
                
    
        </Grid>
        </Grid>
    )
}

export default Contact
