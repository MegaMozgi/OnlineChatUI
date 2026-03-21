import { useState } from "react";
import { useMessage } from "./hooks/useMessage";
import ChatList from "../../entities/Chat/components/ChatList";
import MessageList from "../../entities/Message/components/MessageList";
import SendMessage from "../../features/SendMessage/components/SendMessage";
import Inbox from "../../assets/Inbox"
import useScroll from "../../shared/hooks/useScroll";

const DirectWidget = () => {
    const [activeChat, setActiveChat] = useState();
    const { messages, send } = useMessage(activeChat);
    const scrollRef = useScroll(messages);

    return (
        <div className="flex mt-12 mr-23 bg-header-light rounded-lg border border-element-border-light h-145">
            <div className="flex flex-col w-82 border-r border-element-border-light">
                <div className="flex my-6 mx-8">
                    <h5 className="text-primary-light-text font-medium">Messages</h5>
                </div>
                <ChatList setActveChat={setActiveChat} activeChat={activeChat} />
            </div>

            <div className="flex flex-col w-full">
                <div className="flex my-6 mx-8">

                </div>

                {
                    activeChat ?
                        <div className="flex flex-col mx-8 h-full overflow-y-auto scrollbar" >
                            <MessageList messages={messages} />
                            <div ref={scrollRef}></div>
                        </div>
                        :
                        <div className=" flex flex-col h-full items-center justify-center">
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