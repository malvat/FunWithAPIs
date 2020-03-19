import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Quote extends React.Component {
    constructor(props) {
        super(props);
        this.getQuote();
        this.state = {
            quote: "",
            author: ""
        }
        this.generateLog();
    }

    getQuote = ()=> {
        fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
        .then((response)=>response.json())
        .then((results)=>{
            this.setState({
                quote: results.en,
                author: results.author
            })
        })
    }

    generateLog = () => {
        var log ="[ " + Date().toLocaleString() + " ]";
        log += " | quote api called";
        log = encodeURI(log);
        console.log(log);
        var url = "http://software.engineering.malvat.myweb.cs.uwindsor.ca/log_file.php?log=" + log;
        fetch(url).then((response)=>{
            //do nothing
            console.log("api called");
        })
        console.log("log called");
    }

    render() {
        return(
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6">
                        Quote of the day
                    </Typography>
                    <div>
                        <Typography>
                            {this.state.quote}
                        </Typography>
                        <Typography>
                            - {this.state.author}
                        </Typography>
                    </div>
                    <Button color="secondary" onClick={()=>{this.getQuote(); return;}}>
                        Random
                    </Button>
                </CardContent>
            </Card>
        )
    }
}