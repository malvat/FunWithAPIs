import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default class Time extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clock: new Date(),
            "greetings": "Good Morning"
        }
        setInterval(this.tick, 60000);
        setInterval(this.setGreeting, 1000);
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

    setGreeting = ()=> {
        const clk = this.state.clock.getHours();
        if(clk < 12) {
            this.setState({
                clock: this.state.clock,
                "greetings": "Good Morning"
            })
        } else if(clk < 18) {
            this.setState({
                clock: this.state.clock,
                "greetings": "Good Evening"
            })
        } else {
            this.setState({
                clock: this.state.clock,
                "greetings": "Good Night"
            })
        }
    }

    render(){
        return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">
                        {this.state.greetings}
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