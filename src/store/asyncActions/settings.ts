import { Dispatch } from "redux"
import { SettingsAction, SettingsActionTypes } from "../../models/settings/settings"
import SettingsService from "../../service/SettingsService"

export const loadSettings = (id:string) => {
    return async (dispatch: Dispatch<SettingsAction>) => {
        try {

            const response = await SettingsService.loadSettings(id)
            dispatch({type: SettingsActionTypes.SET_USER_SETTINGS, payload: response.data.settings})
        } catch (e: any) {
            console.log('^^^',e);
        }
    }
}