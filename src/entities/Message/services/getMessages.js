import { apiClient } from "../../../shared/api/client";
import { GET_CHAT_MESSAGES } from "../../../shared/api/endpoints";

export const getMessages = async (chatId, pageNumber) => {
    const response = await apiClient.get(GET_CHAT_MESSAGES + `/?chatId=${chatId}&pageNumber=${pageNumber}`);
    return response.data;
}