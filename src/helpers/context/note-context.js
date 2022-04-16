import { createContext, useContext, useReducer, useState, useEffect, useRef } from 'react';
import { notesReducer } from '../reducer/notesReducer';
import { utilsReducer } from '../reducer/utilsReducer';
import { getNotesService } from '../services/getNoteService';

const NoteContext = createContext()

function NoteProvider({ children }) {
    
    const searchFocusRef = useRef(null)
    
    const [ note, setNote ] = useState({
        title: "",
        desc: "",
        pin: false,
        editedAt: '',
        edit: false,
        color: '',
        label: ''
      });

    const [ label, setLabel ] = useState('');
    const [ labelsList, setLabelsList ] = useState(['Label 1'])

    const [ search, setSearch ] = useState("");

    useEffect(() => {
        getNotesService(notesDispatch);
    }, [])

    
    const [utilsState, utilsDispatch] = useReducer(utilsReducer, {
        hideAside: false,
        pinNote: false,
        darkTheme: true,
        showBgOptions: false,
        showLabelOptions: false,
        showFilterOptions: false,
        focusSearchInput: false
    })

    const [notesState, notesDispatch] = useReducer(notesReducer, {
        notes: [],
        filteredNotes: [],
        archives: [],
        labels: [],
        trash: []
    })

    return (
        <NoteContext.Provider value={{ notesState, notesDispatch, note, setNote, utilsState, utilsDispatch, search, setSearch, label, setLabel, labelsList ,setLabelsList, searchFocusRef }}>
            {children}
        </NoteContext.Provider>
    )
}

const useNote = () => useContext(NoteContext)

export { NoteProvider, useNote }