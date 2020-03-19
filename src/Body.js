import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Weather from './Weather';
import Time from './Time';
import News from './News';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clock: new Date("22:30")
        };
    }

    render(){
        return(
            <Container>
                <Grid style={{paddingTop: "4%"}} container justify="space-evenly">
                    <Grid>
                        <Time/>
                    </Grid>
                    <Grid>
                        <Weather />
                    </Grid>
                    <Grid>
                        <News />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}