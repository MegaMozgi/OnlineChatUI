import { useState, useEffect } from "react";
import { getMessages } from "../../../entities/Message/services/getMessages";
import { sendMessage } from "../../../features/SendMessage/services/sendMessage"
import { connection } from "../../../shared/api/signalrClient";

export const useMessage = (chatId) => {
    const [messages, setMessages] = useState({ items: [] });

    useEffect(() => {
        connection.on("ReceiveMessage", (message) => {
            setMessages(prev => ({
                items: [...prev.items, message]
            }));
        });
        connection.start();
    }, [])

    useEffect(() => {
        if (!chatId) return;

        const fetchData = async () => {
            const response = await getMessages(chatId);
            setMessages(response);
        }
        fetchData();
    }, [chatId])

    const send = async (message) => {
        if (!message.content.trim()) return;

        const result = await sendMessage(message);
        setMessages(prev => ({
            items: [...prev.items, result]
        }));
    }

    return { messages, send };
}