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
            THD_password:'',
            THD_conf_password:''
        }
    }

    onCreateUsername(e){
        this.setState({
            THD_user_name:e.target.value
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

        onConfPassword(e){
        this.setState({
            THD_conf_password:e.target.value
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
            <div style={{marginTop: 20}}>
                <h3> Register as a New User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">

                            <label>Username</label>
                            <input type="text"
                                   className="form-control"
                                   value={this.state.THD_username}
                                   onChange={this.onCreateUsername}
                            />
                            <label>Email</label>
                            <input type="email"
                                   className="form-control"
                                   value={this.state.THD_email}
                                   onChange={this.onCreateEmail}
                            />
                            <label>Password</label>
                            <input type="password"
                                   className="form-control"
                                   value={this.state.THD_password}
                                   onChange={this.onCreatePassword}
                            />
                            <label>Confirm Password</label>
                            <input type="password"
                                   className="form-control"

                            />

                        </div>
                        <div className='form-group'>
                            <input type="submit" value="Create Todo" className="btn btn-light btn-outline-primary"/>
                        </div>

                    </form>
            </div>
        );
    }
}