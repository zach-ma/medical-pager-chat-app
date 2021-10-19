import React from "react";
import { StreamChat } from "stream-chat";
import { ChannelList, Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

// import ChannelListContainer from "./components/ChannelListContainer";
// import ChannelContainer from "./components/ChannelContainer";
import { ChannelListContainer, ChannelContainer } from "./components";

import "./App.css";

const apiKey = "q9ynqunsgx65";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app_wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
      </Chat>
    </div>
  );
};

export default App;
