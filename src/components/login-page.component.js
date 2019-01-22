import React,{Component} from 'react';

export default class LogInPage extends Component{

   constructor(props){
       super(props);
       this.state={
           THD_user_name:'',
           THD_email:'',
           THD_password:''
       }
   }



    render(){
        return (
            <div>
                <p>  Welcome to Twitter Log In Help Desk </p>
            </div>
        );
    }
}