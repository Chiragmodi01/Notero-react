import { createContext, useContext, useReducer, useState, useEffect } from 'react';
import { notesReducer } from '../reducer/notesReducer';
import { utilsReducer } from '../reducer/utilsReducer';
import { getNotesService } from '../services/getNoteService';

const NoteContext = createContext()

function NoteProvider({ children }) {
    
    const [ note, setNote ] = useState({
        title: "",
        desc: "",
        pin: false,
        editedAt: ''
      });

    const [ search, setSearch ] = useState("");

    useEffect(() => {
        getNotesService(notesDispatch);
    }, [])
    
    const [utilsState, utilsDispatch] = useReducer(utilsReducer, {
        hideAside: false,
        pinNote: false,
        darkTheme: true
    })

    const [notesState, notesDispatch] = useReducer(notesReducer, {
        notes: [],
        filteredNotes: [],
        archives: [],
        labels: [],
        trash: []
    })

    return (
        <NoteContext.Provider value={{ notesState, notesDispatch, note, setNote, utilsState, utilsDispatch, search, setSearch }}>
            {children}
        </NoteContext.Provider>
    )
}

const useNote = () => useContext(NoteContext)

export { NoteProvider, useNote }