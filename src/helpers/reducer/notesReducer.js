const notesReducer = (notesState, { type, payload}) => {

    switch(type) {
        case'ADD_NOTE':
        return { ...notesState, notes: [...payload.note]}

        case'FETCH_DATA':
        return { ...notesState, notes: payload }

        case'UPDATE_NOTE':
        return { ...notesState, notes: payload}

        case'SEARCH_NOTE':
        return {...notesState, filteredNotes: notesState.notes.filter((note) => 
                 note.title.toLowerCase().includes(payload.toLowerCase()) ||
                 note.desc.toLowerCase().includes(payload.toLowerCase())
            )}
    }

}

export { notesReducer }
