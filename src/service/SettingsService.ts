import { AxiosResponse } from 'axios';
import $api from '../http';
import { SettingsResponse } from './../models/response/AuthResponce';
export default class SettingsService {
    static async loadSettings (userId: string) :Promise<AxiosResponse<SettingsResponse>> {
        return $api.get<SettingsResponse>(`/settings?userId=${userId}`)

    }
}