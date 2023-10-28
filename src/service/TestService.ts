import { UserInterface } from '../models/user/UserInterface';
import $api from "../http"
import { AxiosResponse } from "axios"
import { AuthResponse } from "../models/response/AuthResponce"

export default class TestService {
    static fetchUsers () : Promise<AxiosResponse<UserInterface[]>> {
        return $api.get<UserInterface[]>('/users')
    }
}