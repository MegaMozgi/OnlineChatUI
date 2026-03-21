import avatar from '../../../assets/profile/avatar.png'

const ChatItem = ({ chat, onClick, isActive }) => {
    return (
        <div onClick={onClick} className={`flex px-8 py-4 gap-6 cursor-pointer hover:bg-active-element-light
            transition-colors ${isActive === true ? 'bg-active-element-light selected-chat' : 'bg-transparent'}`}
            key={chat.chatId} data-id={chat.chatId} data-receiverid={chat.receiverId}>
            <img height="48" width="48" className="rounded-full" src={avatar} />
            <div className="flex flex-col justify-center overflow-hidden">
                <span className="text-sm font-medium text-primary-light-text">{chat.title}</span>
                <span className="text-xs text-secondary-light-text truncate">{chat.lastMessage}</span>
            </div>
        </div>
    )
}

export default ChatItem;