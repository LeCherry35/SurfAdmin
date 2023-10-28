import { UserState, UserAction, UserActionTypes } from '../../models/user/user'
import { UserInterface } from '../../models/user/UserInterface'

const initialState: UserState = {
    user: {
        email: '',
        id: ''
    },
    isAuth: false,
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOADING:
            return { ...state, isLoading: true}
        case UserActionTypes.CLEAR_ERROR:         
            return { ...state, error: action.payload, isLoading: false}
        case UserActionTypes.SET_USER:
            return {error: null, isAuth: true , user: action.payload, isLoading: false}
        case UserActionTypes.LOG_OUT:
            return {...state, isAuth: false , user: {} as UserInterface}
        default:
            return state
    }
}

export const clearErrorAction = () => {
    return {type: UserActionTypes.CLEAR_ERROR, payload: null }
}