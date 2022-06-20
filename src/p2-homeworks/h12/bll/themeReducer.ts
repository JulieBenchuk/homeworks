const initState = {
    background: "some"
};
type changeThemeActionType = {
    type: string
    background: string,
}


export const themeReducer = (state = initState, action: changeThemeActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, background: action.background};
        }
        default:
            return state;
    }
};

export const changeThemeC = (background: string): changeThemeActionType => ({type: "CHANGE_THEME", background}); // fix any
