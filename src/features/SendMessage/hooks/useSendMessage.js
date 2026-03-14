import { useState } from "react";
import { sendMessage } from "../services/sendMessage";

const useSendMessage = () => {
    
    const send = async (message) => {
        if(!message.content.trim()) return;
        const result = await sendMessage(message);
        return result;
    }

    return send;
}

export default useSendMessage;