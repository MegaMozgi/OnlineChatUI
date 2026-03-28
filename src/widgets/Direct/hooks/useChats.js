import { useState, useEffect } from "react";
import { getChats } from "../../../entities/Chat/services/getChats";

export const useChats = () => {
    const [chats, setChats] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await getChats();
                setChats(response);
                console.log(response)
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    return { chats, isLoading };
}