import { useEffect, useRef } from "react";

const useScroll = (messages) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView();
        }
    }, [messages])

    return scrollRef;
}

export default useScroll;