import { useState } from "react";
import SendIcon from "../../../assets/SendIcon"
import useSendMessage from "../hooks/useSendMessage";

const SendMessage = () => {
    const [content, setContent] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const send = useSendMessage();

    const onChange = (c) => {
        var text = c.target.value;
        text.trim() ? setIsButtonVisible(true) : setIsButtonVisible(false);
        setContent(text);
    }

    const handleSend = async () => {
        const element = document.querySelector('.selected-chat');
        const receiverId = element.dataset.receiverid;
        const chatId = element.dataset.id;

        const newMessage ={
            receiverId: receiverId,
            chatId: chatId,
            content: content
        }

        const result = await send(newMessage);
        console.log(result);
    }

    return (
        <div className="flex relative px-12 mt-auto mb-8">
            <input type="text" placeholder="Message ..." className="w-full rounded-lg py-2.5 pl-6 border
                 border-element-border-light outline-none" onChange={onChange} />
            <button className={`absolute my-3 right-16 cursor-pointer ${isButtonVisible ? 'block' : 'hidden'}`} onClick={handleSend}>
                <SendIcon />
            </button>
        </div>
    )
}

export default SendMessage;