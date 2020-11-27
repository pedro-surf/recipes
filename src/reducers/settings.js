const SET_LANGUAGE = 'settings/SET_LANGUAGE'
const SET_DARK_MODE = 'settings/SET_DARK_MODE'


const initialState = {
    language: 'en',
    darkMode: false,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            }

        case SET_DARK_MODE:
            return {
                ...state,
                darkMode: action.darkMode
            }

        default:
            return state
    }
}

export const setLanguage = (language) => dispatch => 
    dispatch({
        type: SET_LANGUAGE,
        language
    })

export const setDarkMode = (darkMode) => dispatch =>
    dispatch({
        type: SET_DARK_MODE,
        darkMode
})
    
export default reducer;
