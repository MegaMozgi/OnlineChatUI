import { useState, useEffect, useCallback } from "react";
import { getMessages } from "../../../entities/Message/services/getMessages";
import { sendMessage } from "../../../features/SendMessage/services/sendMessage"
import { connection } from "../../../shared/api/signalrClient";

export const useMessage = (chatId) => {
    const [messages, setMessages] = useState({
        hasNextPage: true,
        hasPreviousPage: false,
        items: [],
        page: 0,
        totalPages: 0
    });
    const [isLoading, setIsLoading] = useState(false);

    //console.log(messages);
    console.log(chatId);

    useEffect(() => {
        connection.on("ReceiveMessage", (message) => {
            setMessages(prev => ({
                 ...prev,
                items: [message, ...prev.items],
            }));
        });
        connection.start();

        return () => { connection.off("ReceiveMessage"); }
    }, [])

     useEffect(() => {
        fetchData();
    }, [chatId])
    
    const fetchData = useCallback (async () => {

         if (!chatId || isLoading) return;
        var pageNumber = messages.page + 1;

        setIsLoading(true);
        var result = await getMessages(chatId, pageNumber);
        setIsLoading(false);

        setMessages(prev => ({
            hasNextPage: result.hasNextPage,
            hasPreviousPage: result.hasPreviousPage,
            items: [...prev.items, ...result.items.reverse()],
            page: result.page,
            totalPages: result.totalPages
        }));
    }, [chatId, messages.page, messages.hasNextPage])  


    const send = async (message) => {
        if (!message.content.trim()) return;

        const result = await sendMessage(message);
        setMessages(prev => ({
            ...prev,
            items: [result, ...prev.items]
        }));
    }

    return { messages, send, fetchData };
}