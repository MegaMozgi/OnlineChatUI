import { useState } from "react";
import { useMessage } from "./hooks/useMessage";
import { useChats } from "./hooks/useChats";
// import { useAutoScroll } from "../../shared/hooks/useScroll";
import ChatList from "../../entities/Chat/components/ChatList";
import MessageList from "../../entities/Message/components/MessageList";
import SendMessage from "../../features/SendMessage/components/SendMessage";
import Inbox from "../../assets/Inbox";
import Write from "../../assets/direct/Write";
import Spinner from "../../assets/Spinner"

const DirectWidget = () => {
    const [activeChat, setActiveChat] = useState();
    const { chats, isLoading } = useChats();
    const { messages, send, fetchData } = useMessage(activeChat);
    // const autoScrollRef = useAutoScroll(messages);

    return (
        <div className="flex mt-12 mr-23 bg-header-light rounded-lg border border-element-border-light h-145">
            <div className="flex flex-col w-82 border-r border-element-border-light">
                <div className="flex my-6 mx-8">
                    <h5 className="text-primary-light-text font-medium">Messages</h5>
                </div>
                {
                    isLoading ? <div className="flex w-full h-full items-center justify-center"><Spinner /></div>
                        : <ChatList setActveChat={setActiveChat} activeChat={activeChat} chats={chats} />
                }
                <div className="flex justify-center items-center gap-2.5 cursor-pointer
                                mt-auto p-4 border-t border-element-border-light">
                    <Write />
                    <span className="text-secondary-light-text text-sm">New Message</span>
                </div>
            </div>

            <div className="flex flex-col w-full">
                <div className="flex my-6 mx-8">

                </div>
                {
                    activeChat ?
                        <MessageList messages={messages} fetchData={fetchData}/>
                        :
                        <div className="flex flex-col h-full items-center justify-center">
                            <Inbox />
                            <span className="font-medium text-sm mt-4">Your messages</span>
                            <span className="text-sm text-nav-light mt-2">Select a person to display their chat or start a new conversation.</span>
                            <button className="bg-new-message-light rounded-full px-5 py-1 cursor-pointer mt-8">
                                <span className="font-medium text-sm text-header-light">New message</span>
                            </button>
                        </div>
                }
                {
                    activeChat ? <SendMessage send={send} /> : <></>
                }
            </div>
        </div>
    )
}

export default DirectWidget;