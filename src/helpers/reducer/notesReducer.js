const notesReducer = (notesState, { type, payload}) => {

    switch(type) {
        case'ADD_NOTE':
        return { ...notesState, notes: [...payload.note]}

        case'ARCHIVE_NOTE':
        return { ...notesState, notes: [...payload.note], archives: [...payload.archiveNote]}

        case'UNARCHIVE_NOTE':
        return { ...notesState, notes: [...payload.note], archives: [...payload.archiveNote]}

        case'DELETE_NOTE':
        return { ...notesState, notes: [...payload.note], trash: [...notesState.trash, payload.prevNote]}

        case'DELETE_NOTE_FROM_ARCHIVE':
        return { ...notesState, archives: [...payload.archiveNote], trash: [...notesState.trash, payload.note]}

        case'FETCH_DATA':
        return { ...notesState, notes: payload}

        case'UPDATE_NOTE':
        return { ...notesState, notes: payload}

        case'DELETE_FOREVER_NOTE':
        return { ...notesState, trash: notesState.trash.filter((item) => item._id !== payload)}

        case'RESTORE_NOTE':
        return { ...notesState, trash: notesState.trash.filter((item) => item._id !== payload._id)}

        case'SEARCH_NOTE':
        return {...notesState, filteredNotes: notesState.notes.filter((note) => 
                 note.title.toLowerCase().includes(payload.toLowerCase()) ||
                 note.desc.toLowerCase().includes(payload.toLowerCase())
            )}

        case'SEARCH_NOTE_IN_ARCHIVES':
        return {...notesState, filteredNotes: notesState.archives.filter((note) => 
                 note.title.toLowerCase().includes(payload.toLowerCase()) ||
                 note.desc.toLowerCase().includes(payload.toLowerCase())
            )}

        case'SEARCH_NOTE_IN_TRASH':
        return {...notesState, filteredNotes: notesState.trash.filter((note) => 
                    note.title.toLowerCase().includes(payload.toLowerCase()) ||
                    note.desc.toLowerCase().includes(payload.toLowerCase())
            )}
    }

}

export { notesReducer }
