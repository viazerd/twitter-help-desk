import React,{Component} from 'react';

export default class LogInPage extends Component{

    constructor(props){
        super(props);
        this.onCreateEmail = this.onCreateEmail.bind(this);
        this.onCreateUsername = this.onCreateUsername.bind(this);
        this.onCreatePassword = this.onCreatePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            THD_user_name:'',
            THD_email:'',
            THD_password:''
        }
    }

    onCreateUsername(e){
        this.setState({
            THD_username:e.target.value
        });
    }
     onCreateEmail(e){
            this.setState({
                THD_email:e.target.value
            });
        }
     onCreatePassword(e){
            this.setState({
                THD_password:e.target.value
            });
        }

        onSubmit(e){
            e.preventDefault();
            console.log(`Form Submitted: `);
            console.log(`Username: ${this.state.THD_user_name}`);
            console.log(`Email:${this.state.THD_email}`);
            console.log(`Password:${this.state.THD_password}`);

            this.setState({
                THD_user_name:'',
                THD_email:'',
                THD_password:''
            })
        }

    render(){
        return (
            <div>
                <p>  Welcome to Twitter Sign In Help Desk </p>
            </div>
        );
    }
}