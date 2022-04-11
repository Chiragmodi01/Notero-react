import axios from 'axios';

const getNotesService = async(notesDispatch) => {

    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc5YTI1Ni01ZmQ2LTQwZTktYmYwYS04NGUyNGE5MDNmYzAiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.tPP0Mb50-2ihtbeWd7PUpf1_pkzVQjmcxNVBIuqzFlU"

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