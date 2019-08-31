import React from 'react';
import firebase from '../config/firebase';
import TimeList from './time-list';
import AddTimeEntryForm from './add-time-entry-form';

// firebase.firestore().collection('times').add({
//     title: "Cafe Gomez",
//     location: "Hawthorne",
//     rating: 4.1
// });

class Home extends React.Component{
    
    logout(){
        firebase.auth().signOut();
    }
    render(){
        return(         
              <div className="notesWrapper">
                  <div className="notesHeader">
                    <button className="logoutBtn" style={{float: "right"}} onClick={this.logout}>Log Out</button>
                    <div className="heading">React & Firebase Todo-list</div>
                </div>
                <div className="notesBody">
                    <TimeList />
                    <AddTimeEntryForm />
                </div>              
          </div>
        )
    }
}
export default Home;