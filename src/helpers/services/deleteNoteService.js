import axios from 'axios';

const deleteNoteService = async(notesDispatch, note) => {
    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0YTU1YWE3ZC1jMmE3LTQxNzctOTQ0OS0wYTk4YTkyZTRjMWEiLCJlbWFpbCI6ImNocnNpYnJvd25AZ21haWwuY29tIn0.8HrZ73p8GFVl2khCDfFFq7arBzwlZdRsyL_2mG3aBSI"

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.delete(`/api/notes/${note._id}`, {headers: Headers});
        notesDispatch({ type: "DELETE_NOTE", payload: {note: res.data.notes, prevNote: note}})
    } catch(e) {
        console.log(e.message)
    }
}

export { deleteNoteService };