import { useMessage } from "../hooks/useMessage";
import { getUserId } from "../../../shared/utils/jwtHelper";
import { formatTime } from "../../../shared/utils/formatTime";

const Message = ({ chatId }) => {
    const messages = useMessage(chatId);
    const userId = getUserId();

    return (
        messages.items.map(message => (
            <div key={message.messageId} className={`flex ${message.senderId === userId ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex flex-col mb-6 max-w-102 p-3
                    ${message.senderId === userId ? 'bg-user-message-light' : 'bg-active-element-light'} rounded-lg`}>
                    <div className={`text-sm ${message.senderId === userId ? 'text-header-light' : 'text-secondary-light-text'}`}>
                        {message.content}
                    </div>
                    {/* <div className={`flex justify-end`}>
                        {formatTime(message.sentAt)}
                    </div> */}
                </div>
            </div>
        ))
    )
}

export default Message;