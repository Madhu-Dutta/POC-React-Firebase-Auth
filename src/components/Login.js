import React from 'react';
import firebase from '../config/firebase';

class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : "",
            fireErrors : "",
            formTitle: "Login",
            LoginBtn : true 
        }
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
        // console.log(e.target.value)
    }

    signup = e => {        
        e.preventDefault();
        
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((err) => {
            this.setState({fireErrors: err.message});
        });
    }

    login = e => {        
        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((err) => {
            this.setState({fireErrors: err.message});
        });
    }

    getAction = action => {
        if(action === 'sign'){
            this.setState({formTitle: 'Sign Up', LoginBtn: false, fireErrors: " " })
        }
        else
        {
            this.setState({formTitle: 'Login', LoginBtn: true, fireErrors: " " })
        }
    }


    render(){
        //ToggleNotifications
        let errorNotify = this.state.fireErrors ? 
        (<div className="Error">{this.state.fireErrors}</div>) : null;

        //Toggle between submits
        let submitBtn = this.state.LoginBtn ? 
        (<input className="loginBtn" type="submit" onClick={this.login} value="Enter" />):
        (<input className="loginBtn" type="submit" onClick={this.signup} value="SignUp" />)

        //Toggle between login & signup forms
        let login_signup = this.state.LoginBtn ?
        (<button className="signupBtn" onClick={() => this.getAction('sign')} >SignUp</button>):
        (<button className="signupBtn" onClick={() => this.getAction('login')} >Login</button>)

        return(
            <div className = "form_block">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotify}
                    <form>
                    <input name="email" placeholder="Enter email..."
                    type="text" 
                    value={this.state.email} 
                    onChange={this.handleChange}/>

                    <input name="password" placeholder="Enter password.."
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange}/>

                    {submitBtn}
                    {/* <input type="submit" className="loginBtn" onClick={this.login} value="Enter" /> */}
                    </form>                    
                </div> 
                    {login_signup}
                    {/* <button className="signupBtn">SignUp</button>                 */}
            </div>
        )
    }
}
export default Login;