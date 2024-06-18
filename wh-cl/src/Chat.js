import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import AttachFile from "@mui/icons-material/AttachFile";
import MoreVert from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";


function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);


  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed > ', input);
  };

  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar
          src={`https://api.dicebear.com/8.x/adventurer-neutral/svg?seed="${seed}"`}
        />
        <div className="header_info">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className="chat_name">PrinceSharma</span>
          Hi
          <span className="chat_timestamp">3:50pm</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input value={input} onChange={e => setInput(e.target.value)} onClick={sendMessage} placeholder="Type a message" />
          <button type="submit"></button>
          <IconButton>
            <MicIcon />
          </IconButton>
        </form>
      </div>
    </div>
  );
}

export default Chat;
