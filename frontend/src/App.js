import React, { useState, useEffect } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  };

  useEffect(() => {
    connect((msg) => {
      console.log("New Message");
      setChatHistory((prevChatHistory) => [...prevChatHistory, msg]);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;
