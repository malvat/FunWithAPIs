import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import GithubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import ToolTip from '@material-ui/core/Tooltip';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            about: false
        }
        this.openDrawer = this.openDrawer.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closedDrawer = this.toggleDrawer.bind(this);
    }
    list = () => {
        var itemlist = ["Home", "Github", "About us", "Log File (Demonstration)"];
        return(
            <div onClick={this.closedDrawer}>
                <List>
                    {itemlist.map( (item, i)=> (
                        <ListItem key={i} button style={{width: 300}} onClick={()=>{{this.itemSelected(i)}; return;}}>
                                <Typography variant="h6" style={{marginLeft: 20}}>
                                    {item}
                                </Typography>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }

    itemSelected = (key) => {
        console.log(key);
        if(key == 2) {
            this.setState({
                open: this.state.open,
                about: true
            })
        } else if(key==1) {
            window.location.href = "https://github.com/animmalvat/fun";
        }
    }


    handleClose() {
        this.setState({
            open: false
        })
    }

    openDrawer() {
        this.setState({
            open: true
        })
    }

    toggleDrawer() {
        this.setState({
            open: !this.state.open
        })
    }

    closedDrawer() {
        console.log('closed Drawer');
        this.setState({
            open: false
        })
    }

    closeAbout = () => {
        this.setState({
            open: this.state.open,
            about: false
        })
    }
    render() {
        return(
            <div>
                <AppBar position="static">
                    <Dialog open={this.state.about}>
                        <DialogTitle>
                            About us
                        </DialogTitle>
                        <DialogContent>
                            Crafted by Group 28, with the help of guys from facebook <br></br><br></br>
                            Anim Malvat 110024150 <br></br>
                            Dhwani Gurjar 110022182 <br></br>
                            Bhavankit Navadiya 110008466 <br></br> <br></br>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=>{this.closeAbout(); return;}}> Ok </Button>
                        </DialogActions>
                    </Dialog>
                    <Drawer open={this.state.open} onClose = {this.closedDrawer} >
                        {this.list()}
                    </Drawer>
                    <ToolBar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Grid>
                                <ToolTip title="Menu">
                                    <IconButton onClick = {this.openDrawer}>
                                        <MenuIcon style={{fill: "white"}}/>
                                    </IconButton>
                                </ToolTip>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography variant="h6">
                                    Fun with APIs
                                </Typography>
                            </Grid>
                            <Grid>
                                <ToolTip title="Github link">
                                    <IconButton onClick={()=>{window.location.href = "https://github.com/animmalvat/project"; return;}}>
                                        <GithubIcon style={{ fill: "white" }} />
                                    </IconButton>
                                </ToolTip>
                            </Grid>
                        </Grid>
                    </ToolBar>
                </AppBar>
            </div>
        );
    }
}