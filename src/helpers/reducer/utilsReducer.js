const utilsReducer = (utilsState, { type }) => {

    switch(type) {
        case'HIDE_ASIDE':
        return { ...utilsState, hideAside: !utilsState.hideAside}

        case'CHANGE_THEME':
        return {...utilsState, darkTheme: !utilsState.darkTheme}

        case'SHOW_BG_OPTIONS':
        return {...utilsState, showBgOptions: !utilsState.showBgOptions}
        
        case'HIDE_BG_OPTIONS':
        return {...utilsState, showBgOptions: false}

    }

}

export { utilsReducer }