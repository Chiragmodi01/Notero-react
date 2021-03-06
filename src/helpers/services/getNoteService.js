import axios from 'axios';

const getNotesService = async(notesDispatch) => {

    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0YTU1YWE3ZC1jMmE3LTQxNzctOTQ0OS0wYTk4YTkyZTRjMWEiLCJlbWFpbCI6ImNocnNpYnJvd25AZ21haWwuY29tIn0.8HrZ73p8GFVl2khCDfFFq7arBzwlZdRsyL_2mG3aBSI"

    const Headers = { authorization: encodedToken}

    try {
        const res = await axios.get('/api/notes', {headers: Headers});
        if (res.status === 200) {
            notesDispatch({ type: "FETCH_DATA", payload: res.data.notes})
        }
    } catch(e) {
        console.log(e.message)
    }

};

export { getNotesService };