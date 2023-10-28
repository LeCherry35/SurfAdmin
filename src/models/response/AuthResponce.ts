import { UserInterface } from "../user/UserInterface"

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: UserInterface
}