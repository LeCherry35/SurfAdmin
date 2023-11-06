import { SettingsAction, SettingsActionTypes } from './../../models/settings/settings';
import { SettingsStateInterface } from "../../models/settings/settings"


const initialState: SettingsStateInterface = {
    tracksNumber: 1
}


export const settingsReducer = (state = initialState, action: SettingsAction) => {
    switch (action.type) {

        case SettingsActionTypes.SET_TRACKS_NUMBER:
            return {
                ...state, tracksNumber:action.payload
            }
            
        default:
          return state
    }
}