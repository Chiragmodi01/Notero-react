import axios from 'axios';

const postNoteService = async(notesDispatch, note, setNote) => {
    const encodedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI4ZTc5YTI1Ni01ZmQ2LTQwZTktYmYwYS04NGUyNGE5MDNmYzAiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.tPP0Mb50-2ihtbeWd7PUpf1_pkzVQjmcxNVBIuqzFlU"

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