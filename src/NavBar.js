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

export default class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
        }
        this.openDrawer = this.openDrawer.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closedDrawer = this.toggleDrawer.bind(this);
    }
    list = () => {
        var itemlist = ["Home", "Github", "Profile", "About us"];
        return(
            <div onClick={this.closedDrawer}>
                <List>
                    {itemlist.map( (item, i)=> (
                        <ListItem key={i} button style={{width: 300}}>
                                <Typography variant="h6" style={{marginLeft: 20}}>
                                    {item}
                                </Typography>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
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
    render() {
        return(
            <div>
                <AppBar position="static">
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