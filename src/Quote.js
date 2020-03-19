import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: ""
        }
    }



    render() {
        return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">
                        Quote of the day
                    </Typography>
                    <div>
                        <Typography variant="h5">
                            {this.state.quote}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        )
    }
}