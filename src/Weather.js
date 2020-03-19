import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            weather: {}
        }
        this.initialize();
        this.generateLog();
    }

    initialize() {
        //setting up the parameters for the api
        const lat = 42;
        const lng = -83;
        const params = 'windSpeed,humidity,precipitation,visibility,airTemperature';

        //setting starting date and ending date
        var dt = new Date();
        var endt = new Date();
        endt.setHours(dt.getHours() + 2);
        endt = endt.toISOString();
        dt = dt.toISOString();
        
        //calling api using fetch method
        fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}&start=${dt}
        &end=${endt}`,{
        //it is unsafe to use api key here but for demonstration purpose we have used it here
        headers: {
            'Authorization': '1f578c04-69f8-11ea-b89c-0242ac130002-1f578d94-69f8-11ea-b89c-0242ac130002'
        }
        }).then((response) => response.json()).then((jsonData) => {
            this.setState({
                loading: false,
                weather: jsonData
            })
        });
    }

    generateLog = () => {
        var log ="\n[ " + Date().toLocaleString() + " ]";
        log += " | weather api called \n";
        log = encodeURI(log);
        console.log(log);
        var url = "http://software.engineering.malvat.myweb.cs.uwindsor.ca/log_file.php?log=" + log;
        fetch(url).then((response)=>{
            //do nothing
            console.log("api called");
        })
        console.log("log called");
    }

    render(){
        //check if the data has been loaded or not
        if(!this.state.loading){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6">
                            Weather
                        </Typography>
                        <div>
                            <Typography>
                                Temperature: {this.state.weather.hours[0].airTemperature.noaa} C <br></br>
                                Wind Speed: {this.state.weather.hours[0].windSpeed.noaa} m/s <br></br>
                                Humidity: {this.state.weather.hours[0].humidity.noaa} % <br></br>
                                Precipitation: {this.state.weather.hours[0].precipitation.noaa} kg/m<sup>2</sup> <br></br>
                                Visibility: {this.state.weather.hours[0].visibility.noaa} km <br></br>
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            )
        } else {
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h6" >
                            Weather
                        </Typography>
                        <div style={{justifyContent: "center"}}>
                            <CircularProgress />
                        </div>
                    </CardContent>
                </Card>
            )
        }
    }
}