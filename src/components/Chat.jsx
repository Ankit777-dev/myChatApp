import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src="https://cdn-icons-png.flaticon.com/512/685/685655.png" alt="" />
          <img src="https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/add-43.png" alt="" />
          <img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/more-512.png" alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
