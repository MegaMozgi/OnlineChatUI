import { apiClient } from "../../../shared/api/client";
import { SEND_MESSAGE_TO_PRIVATE } from "../../../shared/api/endpoints";

export const sendMessage = async (message) => {
    const response = await apiClient.post(SEND_MESSAGE_TO_PRIVATE, message);
    return response.data;
}