import { Avatar, Card, CardActionArea, CardContent, Button,CardActions,Grid, Typography } from '@material-ui/core';
import React from 'react';
import makeStyles from './ProfileStyle';


function Profile() {
    const classes=makeStyles();

    return (
        <Card className={classes.card} elevation={3} >
            <CardActionArea>
                <CardContent>

                <Avatar className={classes.avatar}>C</Avatar>
                <Grid container justify='center' alignItems='center' direction='column' >
                    <Typography  variant='h4'>Comapny name</Typography>
                    <Typography variant='h6' gutterBottom>CEO Name</Typography>
                </Grid>
                    <Typography className={classes.subheading} variant='h6'><u>Our Area Of Work :</u></Typography>
                    <Typography className={classes.contents} variant='body2'>Area Of Work</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Company is Based in :</u></Typography>
                    <Typography className={classes.contents} variant='body2'>location</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>We Like to say That:</u></Typography>
                    <Typography className={classes.contents} variant='body2'>Investor content</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Domain:</u></Typography>
                    <Typography className={classes.contents} variant='body2'>Investor content</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Links :</u></Typography>
                    <Typography className={classes.contents} variant='body2'>Linked in</Typography>
                    <Typography className={classes.contents} variant='body2'>Website</Typography>
                    <Typography className={classes.contents} variant='body2'>PPt</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Like Our Profile Lets get in Touch:</u></Typography>
                    <Typography className={classes.contents} variant='body2'>Contact Number:</Typography>
                    <Typography className={classes.contents} variant='body2'>Email</Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                    <Button className={classes.button}  size='small' color='secondary' variant='contained'>
                        Send a Message
                    </Button>
            </CardActions> 
        </Card>
    )
}

export default Profile
