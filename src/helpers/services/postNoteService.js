import axios from 'axios';

const postNoteService = async(notesDispatch, note) => {
    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0YTU1YWE3ZC1jMmE3LTQxNzctOTQ0OS0wYTk4YTkyZTRjMWEiLCJlbWFpbCI6ImNocnNpYnJvd25AZ21haWwuY29tIn0.8HrZ73p8GFVl2khCDfFFq7arBzwlZdRsyL_2mG3aBSI"

    const Headers = { authorization: encodedToken}

    const noteToSend = {note : note}
    try {
        const res = await axios.post("/api/notes", noteToSend, {headers: Headers});
        notesDispatch({ type: "ADD_NOTE", payload: {note: res.data.notes}})
    } catch(e) {
        console.log(e.message)
    }
}

export { postNoteService };