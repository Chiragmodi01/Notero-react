import axios from 'axios';

const postNoteService = async(notesDispatch, note, setNote) => {
    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0YTU1YWE3ZC1jMmE3LTQxNzctOTQ0OS0wYTk4YTkyZTRjMWEiLCJlbWFpbCI6ImNocnNpYnJvd25AZ21haWwuY29tIn0.8HrZ73p8GFVl2khCDfFFq7arBzwlZdRsyL_2mG3aBSI"

    const Headers = { authorization: encodedToken}

    const noteToSend = {note : note}
    try {
        const res = await axios.post("/api/notes", noteToSend, {headers: Headers});
        console.log(res.status, 'post')
        console.log(res.data.notes, 'post')
        notesDispatch({ type: "ADD_NOTE", payload: {note: res.data.notes, setNote: setNote}})
    } catch(e) {
        console.log(e.message)
    }
}

export { postNoteService };