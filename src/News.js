import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: {},
            "input": "",
            loading: true
        }
        this.getNews();
    }

    getNews = () => {
        var url = "https://content.guardianapis.com/search?q="+ this.state.input +"&api-key=d09d67a8-2c3e-461f-be77-788f360a0160"
        fetch(url).then((response)=>response.json())
        .then((result)=>{
            console.log(result);
            this.setState({
                news: result,
                "input": "",    
                loading: false,
            })
        })
        this.generateLog();
    }

    generateLog = () => {
        var log ="[ " + Date().toLocaleString() + " ]";
        log += " | news api called";
        log += " | input = " + this.state.input + "\n";
        log = encodeURI(log);
        console.log(log);
        var url = "http://software.engineering.malvat.myweb.cs.uwindsor.ca/log_file.php?log=" + log;
        fetch(url).then((response)=>{
            //do nothing
            console.log("api called");
        })
        console.log("log called");
    }

    printNews = () => {
        return(this.state.news.response.results.slice(0,4).map((data, i)=>(
            <p>
                <a href={data.webUrl} style={{textDecoration: "none"}} key={i}> {data.webTitle} </a>
            </p>)))
    }

    updateInput = (e) => {
        this.setState({
            news: this.state.news,
            "input": e.target.value,    
            loading: false,
        })
        console.log(e.target.value);
    }

    render(){
        if(this.state.loading) {
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">
                            News
                        </Typography>
                        <div>
                            <Typography variant="h5">
                                <CircularProgress/>
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            )
        } else {
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">
                            News
                        </Typography>
                        <div>
                            <Typography >
                                { this.printNews() }
                            </Typography>
                        </div>
                        <div>
                            <TextField variant="filled" value={this.state.input} onChange={this.updateInput} label="search" size="small"/>   
                            &nbsp;
                            &nbsp;
                            <Button size="large" color="primary" onClick={()=>{this.getNews(); return;}}> GO </Button>
                        </div>
                    </CardContent>
                </Card>
            );
        }
    }
}