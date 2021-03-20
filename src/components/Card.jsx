import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@material-ui/core";
import makeStyles from './CardStyle'
import { VerifiedUser } from '@material-ui/icons';

function Cards({heading, body,id}) {
    const classes = makeStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography className={classes.heading} gutterBottom variant='h4' component='h2'>
                        {`${heading.toUpperCase()}        `}
                        {id!="60563540704f484700fe0fa2"&&id!="60563438704f484700fe0fa0"?<VerifiedUser style={{color:'lightgreen'}} />:null}
                    {/* <VerifiedUser style={{color:'lightgreen'}} /> */}
                    </Typography>
                    <Typography variant='body2'  component='p' >
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button href={`/profile/${id}`} size='small' color='secondary' >
                        Know More
                    </Button>
                    <Button href={`/contact/${id}`}  size='small' color='secondary'>
                        Contact
                    </Button>
                </CardActions>

        </Card>
    )
}

export default Cards
