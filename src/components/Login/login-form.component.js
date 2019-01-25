import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import "bootstrap/dist/css/bootstrap.min.css"

import {
    TextField,
    RaisedButton,
    Dialog,
    Checkbox
} from 'material-ui';

import styles from './Style'

class LoginForm extends React.Component {

    state = {
        open: false,
        checked: false,
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked,
            };
        });
    }

    render(){
        const actions = [
            <a href="/">Forgot My Password</a>,
            <RaisedButton
                label="Submit"
                onClick={this.handleClose}
                primary={true}
                style={styles.buttonStyle}
            />,
            <RaisedButton
                label="Cancel"
                onClick={this.handleClose}
                secondary={true}
                style={styles.buttonStyle}
            />,
        ];

        return (
            <MuiThemeProvider>
                <Button variant="outlined"  className={Button}
                    label="Login"

                    secondary={true}
                    onClick={this.handleOpen}
                    style={styles.buttonStyle}
                > <AccountCircle /> </Button>


                <Dialog
                    title="Sign In To Twitter help Desk "
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    contentStyle={styles.customContentStyle}
                >
                    <TextField
                        floatingLabelText="Username or Email"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        fullWidth={true}
                    /><br />
                    <TextField
                        type="password"
                        floatingLabelText="Password"
                        floatingLabelStyle={styles.floatingLabelStyle}
                        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        fullWidth={true}
                    /><br />
                    <Checkbox
                        label="Remember Me"
                        checked={this.state.checked}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkbox}
                    />
                    <signUp style={styles.signUpStyle}>
                        I don't have an account
                        <a href="/"  style={styles.loginLink}>
                            Sign Up Now
                        </a>
                    </signUp>
                </Dialog>
            </MuiThemeProvider>
        )
    }
}
export default LoginForm;