import {REGISTER_URL} from '../../../shared/api/endpoints'
import {LOGIN_URL} from '../../../shared/api/endpoints'
import {apiClient} from '../../../shared/api/client'
import {setAuthToken} from '../../../shared/api/client'

export const registerUser = async (formData) => {
    let response = await apiClient.post(REGISTER_URL, formData);
    console.log(response);
}

export const loginUser = async (formData) => {
    let response = await apiClient.post(LOGIN_URL, formData);
    const AUTH_TOKEN = response.data.accessToken;
    setAuthToken(AUTH_TOKEN);
}