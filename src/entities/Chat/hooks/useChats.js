import { useState, useEffect } from "react";
import { getChats } from "../services/getChats";

export const useChats = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getChats();
            setChats(response);
            console.log(response);
        }
        fetchData();
    }, []);

    return chats;
}