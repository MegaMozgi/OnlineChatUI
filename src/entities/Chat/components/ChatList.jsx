import ChatItem from "./ChatItem";

const ChatList = ({ activeChat, setActveChat, chats }) => {
    return (
        <div className="pt-8 border-t border-element-border-light">
            {
                chats.map((chat) => (
                    <ChatItem key={chat.chatId} chat={chat}
                        isActive={activeChat === chat.chatId}
                        onClick={() => setActveChat(chat.chatId)} />
                ))
            }
        </div>
    )
}

export default ChatList;