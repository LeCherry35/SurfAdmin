import { SettingsInterface } from "./SettingsInterface"

export enum SettingsActionTypes {
    SET_USER_SETTINGS = 'SET_USER_SETTINGS',
    SET_TRACKS_NUMBER = 'SET_TRACKS_NUMBER'
    
}

export interface  SettingsStateInterface {
    tracksNumber: number
}


interface SetTracksNumberActionInterface {
    type: SettingsActionTypes.SET_TRACKS_NUMBER
    payload: number
}

interface SetUserSettingsActionInterFace {
    type: SettingsActionTypes.SET_USER_SETTINGS
    payload: SettingsInterface
}

export type SettingsAction = SetTracksNumberActionInterface | SetUserSettingsActionInterFace