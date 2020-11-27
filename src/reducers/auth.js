import { validateEmail } from '../utils';

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST'
const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST'
const RECOVERY_REQUEST = 'auth/RECOVERY_REQUEST'
const DECREMENT_TIMER = 'auth/DECREMENT_TIMER'


const initialState = {
    loggedIn: false,
    jwtToken: null,
    recoveryTimer: 0,
    invalidCredentials: false,
    emptyPassword: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN_REQUEST:
            const emailIsValid = validateEmail(action.credentials.email);
            const passwordIsValid = action.credentials.password.length > 0;
            return {
                ...state,
                loggedIn: emailIsValid && passwordIsValid,
                invalidCredentials: !emailIsValid,
                emptyPassword: !passwordIsValid,
                jwtToken: emailIsValid && passwordIsValid  ? 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjkxY2RiY2UyLTlkYjktNDgzNS04MDg2LThlMDBiNDhjYjE3OCIsImlhdCI6MTYwNjM1Njk3NywiZXhwIjoxNjA2MzYwNTc3fQ.6Ykhb1-IuwYYjKYOLf5cV3QrhxYcMgwD2u2DidNMADU' : ''
            }

        case LOGOUT_REQUEST:
            return {
                ...state,
                loggedIn: false,
                jwtToken: null
            }
        case RECOVERY_REQUEST:
            if (validateEmail(action.credentials.email)) {
                initRecoveryTimer();
                return {
                    ...state,
                    invalidCredentials: false,
                    recoveryTimer: 60
                }
            }
            return {
                ...state,
                invalidCredentials: true
            }

        case DECREMENT_TIMER:
            return {
                ...state,
                recoveryTimer: state.recoveryTimer - 1
            }

        default:
            return state
    }
}

export const login = (credentials) => dispatch =>
    dispatch({
        type: LOGIN_REQUEST,
        credentials
    })

export const logout = () => dispatch =>
    dispatch({
        type: LOGOUT_REQUEST
    })

export const recoverPassword = (credentials) => dispatch =>
    dispatch({
        type: RECOVERY_REQUEST,
        credentials
    })

export const initRecoveryTimer = () => {
    return dispatch => {
        return setTimeout(() => {
            dispatch({
                type: DECREMENT_TIMER
            })
        }, 1000)
    }
}

export default reducer;
