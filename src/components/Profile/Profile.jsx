import { Avatar, Card, CardActionArea, CardContent, Button,CardActions,Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import makeStyles from './ProfileStyle';


function Profile() {
    const [Company, setCompany] = useState(null)
    const id= window.location.pathname.slice(9);
    const getCompany=async()=>{
        await axios.get(`http://localhost:8000/getStartupId/${id}`)
            .then((res)=>{
                setCompany(res.data)
                console.log(res.data);
            
            })
            .catch(console.log('unable to load data'))
    }

    useEffect(() => {
        getCompany();
        
    }, []);
    // console.log(id);

    
    const classes=makeStyles();

    if (!Company) return 'Loading ...'

    return (
        <Card className={classes.card} elevation={3} >
            <CardActionArea>
                <CardContent>

                <Avatar className={classes.avatar}>{Company.CompanyName.slice(0,1).toUpperCase()}</Avatar>
                <Grid container justify='center' alignItems='center' direction='column' >
                    <Typography  variant='h4'>{Company.CompanyName.toUpperCase()}</Typography>
                    <Typography variant='h6' gutterBottom>CEO : {Company.NameofCeo.toUpperCase()}</Typography>
                </Grid>
                    <Typography className={classes.subheading} variant='h6'><u>Our Area Of Work :</u></Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.FeildOfWork}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Company is Based in :</u></Typography>
                    <Typography className={classes.contents} variant='body2'>{`${Company.Country},${Company.State},${Company.City}`}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>We Like to say That:</u></Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.InvestorContent}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Domain:</u></Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.Domain}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Links :</u></Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.Linkedin}</Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.CompanyWebsite}</Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.SlideLink}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Like Our Profile Lets get in Touch:</u></Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.Contact}</Typography>
                    <Typography className={classes.contents} variant='body2'>{Company.Email}</Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button href={`/contact/${id}`} className={classes.button}  size='small' color='secondary' variant='contained'>
                        Send a Message
                    </Button>
            </CardActions> 
        </Card>
    )
}

export default Profile
