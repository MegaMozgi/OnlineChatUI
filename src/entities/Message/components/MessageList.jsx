import { getUserId } from "../../../shared/utils/jwtHelper";
import MessageItem from "./MessageItem";
import { formatTime } from "../../../shared/utils/formatTime";

const MessageList = ({ messages }) => {
    const userId = getUserId();

    return (
        messages.items.map(message => (
            <MessageItem key={message.messageId} message={message} userId={userId}/>
        ))
    )
}

export default MessageList;