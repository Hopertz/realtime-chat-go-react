import "./Message.css";
import React, { useState, useEffect } from "react";

const Message = (props) => {
  const [message, setMessage] = useState({});

  useEffect(() => {
    console.log(props.message)
    const temp = JSON.parse(props.message);
    setMessage(temp);
  }, [props.message]);

  return <div className="chat-message">{message.body} - {message.user} </div>;
};

export default Message;

