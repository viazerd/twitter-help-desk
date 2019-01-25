import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../Login/login-form.component'
import logo from "../../logo.png";
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';




const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className="shadow-lg bg-secondary">
                <Toolbar>
                    <a className="navbar-brand" href="https://twitter.com/">
                        <img src={logo} width="30" height="30" alt="twitter" target="_blank"/>
                    </a>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Twitter HelpDesk
                    </Typography>

                    <LoginForm/>

                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);