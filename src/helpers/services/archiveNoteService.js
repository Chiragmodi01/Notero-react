import axios from 'axios';
// import { useLocation } from 'react-router-dom';

const archiveNoteService = async(notesDispatch, note, setNote) => {
    // const {pathname} = useLocation();
    
    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0YTU1YWE3ZC1jMmE3LTQxNzctOTQ0OS0wYTk4YTkyZTRjMWEiLCJlbWFpbCI6ImNocnNpYnJvd25AZ21haWwuY29tIn0.8HrZ73p8GFVl2khCDfFFq7arBzwlZdRsyL_2mG3aBSI"

    const Headers = { authorization: encodedToken}

    const noteToSend = {note : note}
    try {
        const res = await axios.post(`/api/notes/archives/${note._id}` , noteToSend, {headers: Headers});
        console.log(res.status, 'post archive')
        console.log(res.data.archives, 'post archive, archiveNote')
        console.log(res.data.notes, 'post archive, notes')
        notesDispatch({ type: "ARCHIVE_NOTE", payload: {note: res.data.notes, archiveNote: res.data.archives, setNote: setNote}})
    } catch(e) {
        console.log(e.message)
    }
}

export { archiveNoteService };