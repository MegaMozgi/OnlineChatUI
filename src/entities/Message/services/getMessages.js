import { apiClient } from "../../../shared/api/client";
import { GET_CHAT_MESSAGES } from "../../../shared/api/endpoints";

export const getMessages = async (chatId) => {
    const response = await apiClient.get(GET_CHAT_MESSAGES + `/?chatId=${chatId}`);
    console.log(response.data);
    return response.data;
}