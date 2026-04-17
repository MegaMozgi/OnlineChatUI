import { getUserId } from "../../../shared/utils/jwtHelper";
import InfiniteScroll from 'react-infinite-scroll-component';
import MessageItem from "./MessageItem";
import { formatTime } from "../../../shared/utils/formatTime";

const MessageList = ({ messages, fetchData, autoScrollRef }) => {
    const userId = getUserId();

    return (
        <div id="chat-messages" className="flex flex-col-reverse mx-8 h-full overflow-y-auto scrollbar" >
            <InfiniteScroll
                dataLength={messages.items.length}
                next={fetchData}
                hasMore={messages.hasNextPage}
                loader={<h4>Завантаження історії...</h4>}
                inverse={true}
                scrollableTarget="chat-messages"
                style={{ display: 'flex', flexDirection: 'column-reverse' }}
            >
                {messages.items.map(message => (
                    <MessageItem key={message.messageId} message={message} userId={userId} />
                ))}
            </InfiniteScroll>
            {/* <div ref={autoScrollRef}></div> */}
        </div >
    )
}

export default MessageList;