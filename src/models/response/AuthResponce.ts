import { SettingsInterface } from "../settings/SettingsInterface"
import { UserInterface } from "../user/UserInterface"

export interface AuthResponse {
    accessToken: string
    refreshToken: string
    user: UserInterface
}

export interface SettingsResponse {
    settings: SettingsInterface
}