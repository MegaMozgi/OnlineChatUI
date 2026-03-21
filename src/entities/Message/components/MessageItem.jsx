import { detectEmoji } from "../../../shared/utils/detectEmoji";

const MessageItem = ({ message, userId }) => {
    return (
        <div className={`flex ${message.senderId === userId ? 'justify-end' : 'justify-start'}`}>

            {
                !detectEmoji(message.content) ?
                    <div className={`flex flex-col mb-3 max-w-102 p-3 break-all
                    ${message.senderId === userId ? 'bg-user-message-light' : 'bg-active-element-light'} rounded-lg`}>
                        <span className={`text-sm ${message.senderId === userId ? 'text-header-light' : 'text-secondary-light-text'}`}>
                            {message.content}
                        </span>
                        {/* <div className={`flex justify-end`}>
                        {formatTime(message.sentAt)}
                    </div> */}
                    </div>
                    :
                    <div className="flex flex-col mb-3 max-w-105 break-all rounded-lg">
                        <span className="bg-transparent text-4xl">
                            {message.content}
                        </span>
                    </div>
            }
        </div>
    )
}

export default MessageItem;