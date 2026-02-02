import {REGISTER_URL} from '../../../api/endpoints'
import {LOGIN_URL} from '../../../api/endpoints'
import {apiClient} from '../../../api/client'
import {setAuthToken} from '../../../api/client'

export const registerUser = async (formData) => {
    let response = await apiClient.post(REGISTER_URL, formData);
    console.log(response);
}

export const loginUser = async (formData) => {
    let response = await apiClient.post(LOGIN_URL, formData);
    setAuthToken(response.data.accessToken);
}