import { useEffect, useRef } from "react";

export const useAutoScroll = (messages) => {
    const autoScrollRef = useRef(null);

    useEffect(() => {
        if (autoScrollRef.current) {
            autoScrollRef.current.scrollIntoView();
        }
    }, [messages])

    return autoScrollRef;
}

export const useScrollTop = (messages) => {
    const chatScrollTopRef = useRef(null);

    useEffect(() => {
        let chatElement = chatScrollTopRef.current;

        if (chatElement.scrollTop === 0) {
            alert("This is top !!!");
        }
    }, [messages])

    return chatScrollTopRef;
}