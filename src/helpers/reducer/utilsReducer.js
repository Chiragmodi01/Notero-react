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

        case'SHOW_LABEL_OPTIONS':
        return {...utilsState, showLabelOptions: !utilsState.showLabelOptions}
        
        case'HIDE_LABEL_OPTIONS':
        return {...utilsState, showLabelOptions: false}
        
        case'SHOW_FILTER_OPTIONS':
        return {...utilsState, showFilterOptions: !utilsState.showFilterOptions}
        
        case'HIDE_FILTER_OPTIONS':
        return {...utilsState, showFilterOptions: false}

        case'FOCUS_SEARCH_INPUT':
        return {...utilsState, focusSearchInput: !utilsState.focusSearchInput}
        
        case'UNFOCUS_SEARCH_INPUT':
        return {...utilsState, focusSearchInput: false}

    }

}

export { utilsReducer }