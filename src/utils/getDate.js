import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

function GetCurrentDate () {
    const currentTime = moment();

    let dateString = new Date().toDateString();    
    const currentDate = dateString.split(' ').slice(0, 2).join(', ');
    const currentDay = dateString = dateString.split(' ').slice(2, 3).join(' ');

    return (
        <div className="GetTime-wrapper">
            <p>Edited: {currentDate} {currentDay}</p> | <Moment date={currentTime} format="hh:mm" trim />
        </div>
    )
}
export default GetCurrentDate