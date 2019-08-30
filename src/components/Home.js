import React from 'react';
import fire from '../config/firebase';

class Home extends React.Component{
    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
          <div>
              <h1>You are logged in...</h1>
              <button onClick={this.logout}>Log Out</button>
          </div>
        )
    }
}
export default Home;