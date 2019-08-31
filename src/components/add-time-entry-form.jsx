import React , {useState} from 'react';
import firebase from '../config/firebase';

const AddTimeEntryForm = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    function onSubmit(e){
        e.preventDefault();

        firebase
        .firestore()
        .collection('times')
        .add({
            title,
            times: parseInt(time)
        })
        .then(() => {
            setTime('')
            setTitle('')
        })
    }
    return(
        <form onSubmit={onSubmit}>
            <h4>Add Task</h4>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)} />
            </div>
            <div>
                <label>Time</label>
                <input type="number" value={time} onChange={e=> setTime(e.currentTarget.value)} />
            </div>
            <button className="addTask">Add Task</button>
        </form>
    )
}

export default AddTimeEntryForm;