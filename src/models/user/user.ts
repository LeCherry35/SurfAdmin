import { UserInterface } from './UserInterface';

export enum UserActionTypes {
    SET_USER = 'SET_USER',
    LOG_OUT = 'LOG_OUT',
    LOADING = 'LOADING',
    CLEAR_ERROR = 'CLEAR_ERROR'
}

export interface UserState {
    user: UserInterface
    isAuth: boolean
    isLoading: boolean
    error: null | string
}

interface LoadingActionInterface {
    type: UserActionTypes.LOADING
}

interface AuthErrorActionInterface {
    type: UserActionTypes.CLEAR_ERROR
    payload: string
}

interface SetUserActionInterface {
    type: UserActionTypes.SET_USER
    payload: UserInterface
}

interface LogoutActionInterface {
    type: UserActionTypes.LOG_OUT
}
export type UserAction  = LoadingActionInterface | AuthErrorActionInterface | SetUserActionInterface | 
    LogoutActionInterface