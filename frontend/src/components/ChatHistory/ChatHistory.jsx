import "./ChatHistory.css";
import Message from "../Message";




const ChatHistory = (props) => {
  const messages = props.chatHistory.map((msg) => (
    <Message message={msg.data} key={msg.id} />
  ));

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;

