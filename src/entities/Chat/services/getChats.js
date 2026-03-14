import { apiClient } from "../../../shared/api/client";
import { GET_CHATS_URL } from "../../../shared/api/endpoints";

export const getChats = async () => {
    const response = await apiClient.get(GET_CHATS_URL);
    return response.data;
}