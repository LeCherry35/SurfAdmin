import { UserActionTypes, UserAction } from '../../models/user/user'
import { Dispatch } from "redux"
import AuthService from '../../service/AuthService'

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.LOADING})

            const response = await AuthService.login(email, password)
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            dispatch({type: UserActionTypes.SET_USER, payload: response.data.user})
        } catch (e: any) {
            console.log('^^^',e);
            
            dispatch({type: UserActionTypes.CLEAR_ERROR, payload: e.response?.data?.message || e.message})
        }
    }
}

export const register = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.LOADING})
            const response = await AuthService.registration(email, password)
            
            localStorage.setItem('token', response.data.accessToken)
            dispatch({type: UserActionTypes.SET_USER, payload: response.data.user}) 
        } catch (e: any) {
            dispatch({type: UserActionTypes.CLEAR_ERROR, payload: e.response?.data?.message || e.message})
        }    
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            dispatch({type: UserActionTypes.LOG_OUT})
            
        } catch (e: any) {
            dispatch({type: UserActionTypes.CLEAR_ERROR, payload: e.response?.data?.message || e.message})
        }
    }
}

export const checkAuth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            
            dispatch({type: UserActionTypes.LOADING})
            const response = await AuthService.checkAuth()
            
            localStorage.setItem('token', response.data.accessToken)
            
            dispatch({type: UserActionTypes.SET_USER, payload: response.data.user})
        } catch (e:any) {
            dispatch({type: UserActionTypes.CLEAR_ERROR, payload: e.response?.data?.message})
        } 
    }
  }