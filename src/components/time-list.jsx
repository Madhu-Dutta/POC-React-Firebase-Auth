import React, {useState, useEffect}  from 'react';
import firebase from '../config/firebase';

const SORT_OPTIONS = {
    'TIME_ASC': {column: 'times', direction: 'asc'},
    'TIME_DESC': {column: 'times', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'},
}

function useTimes(sortBy="TIME_ASC"){
    const[times, setTimes] = useState([])

    useEffect(() => {
        const unsubscribe = 
        firebase
        .firestore()
        .collection('times')
        .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
        .onSnapshot((snapshot) => {
            const newTimes = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setTimes(newTimes)
        });

        return() => unsubscribe()

    }, [sortBy]);

    return times;
}

const TimeList = () => {
    const [sortBy, setSortBy] = useState('TIME_ASC');
    const times = useTimes(sortBy);

return(
    <div>
        <h2>TODO Time List</h2>
    <label>Sort by: </label>{' '}
        <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
            <option value="TIME_ASC">Time (fastest first)</option>
            <option value="TIME_DESC">Time (slowest first)</option>
            <option disabled>--------</option>
            <option value="TITLE_ASC">Title(a-z)</option>
            <option value="TITLE_DESC">Title(z-a)</option>
        </select>
        <ul>
            {times.map((time) =>
               <li key={time.id}>
                    <div className="time-entry">
                        {time.title}
                        <code className="time"> {time.times} seconds</code>
                    </div>
                </li> 
            )}    
        </ul>  
    </div>
    )
}

export default TimeList;
                