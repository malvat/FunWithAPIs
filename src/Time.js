import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clock: new Date()
        }
        setInterval(this.tick, 60000);
    }

    tick = () => {
        fetch("http://worldtimeapi.org/api/ip")
            .then(res=>res.json())
                .then((result)=>{
                    console.log(result.datetime);
                    var dt = result.datetime.split("+");
                    this.setState({
                        clock: new Date(dt[0])
                    })
            })
    }

    render(){
        return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">
                        Good Morning
                    </Typography>
                    <div>
                        <Typography variant="h5">
                            {String(this.state.clock.getHours()).padStart(2, '0')} : {String(this.state.clock.getMinutes()).padStart(2,'0')}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        );
    }
}