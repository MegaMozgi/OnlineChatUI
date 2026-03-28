import { useState } from "react";
import SendIcon from "../../../assets/SendIcon"

const SendMessage = ({send}) => {
    const [content, setContent] = useState('');
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    const onChange = (c) => {
        var text = c.target.value;
        text.trim() ? setIsButtonVisible(true) : setIsButtonVisible(false);
        setContent(text);
    }

    const handleSend = async () => {
        const element = document.querySelector('.selected-chat');

        const newMessage = {
            receiverId: element.dataset.receiverid,
            chatId: element.dataset.id,
            content: content
        }

        await send(newMessage);
        setContent('');
        setIsButtonVisible(false);
    }

    return (
        <div className="flex relative px-12 mt-auto mb-8">
            <input type="text" placeholder="Message ..." className="w-full rounded-lg py-2.5 pl-6 border
                 border-element-border-light outline-none overflow-auto wrap-break-word" onChange={onChange} value={content}/>
            <button className={`absolute my-3 right-16 cursor-pointer ${isButtonVisible ? 'block' : 'hidden'}`} onClick={handleSend}>
                <SendIcon />
            </button>
        </div>
    )
}

export default SendMessage;