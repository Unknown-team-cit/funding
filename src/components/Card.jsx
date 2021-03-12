import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@material-ui/core";
import makeStyles from './CardStyle'

function Cards({heading, body}) {
    const classes = makeStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography className={classes.heading} gutterBottom variant='h4' component='h2'>
                        {heading}
                    </Typography>
                    <Typography variant='body2'  component='p' >
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button size='small' color='secondary' >
                        Know More
                    </Button>
                    <Button  size='small' color='secondary'>
                        Contact
                    </Button>
                </CardActions>

        </Card>
    )
}

export default Cards
