import { useState, useEffect } from "react";
import { getMessages } from "../services/getMessages";

export const useMessage = (chatId) => {
    const [messages, setMessages] = useState({items:[]});

    useEffect(() => {
        if(!chatId) return;

        const fetchData = async () => {
            const response = await getMessages(chatId);
            setMessages(response);
        }
        fetchData();
    }, [chatId])

    return messages;
}