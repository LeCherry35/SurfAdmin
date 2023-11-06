export enum SettingsActionTypes {
    SET_TRACKS_NUMBER = 'SET_TRACKS_NUMBER'
}

export interface  SettingsStateInterface {
    tracksNumber: number
}


interface SetTracksNumberActionInterface {
    type: SettingsActionTypes.SET_TRACKS_NUMBER
    payload: number
}

export type SettingsAction = SetTracksNumberActionInterface