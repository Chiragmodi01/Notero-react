const utilsReducer = (utilsState, { type }) => {

    switch(type) {
        case'HIDE_ASIDE':
        return { ...utilsState, hideAside: !utilsState.hideAside}

        // case'PIN_NOTE':
        // return { ...utilsState, pinNote: true}

        // case'UNPIN_NOTE':
        // return { ...utilsState, pinNote: false}

        case'CHANGE_THEME':
        return {...utilsState, darkTheme: !utilsState.darkTheme}
    }

}

export { utilsReducer }