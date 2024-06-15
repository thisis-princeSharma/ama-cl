import React, { useEffect, useState } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';


function Chat() {
    const [seed, setSeed] = useState("")
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);
  return (
    <div className='chat'>
        <div className='chat_header'>
            <Avatar src={`https://api.dicebear.com/8.x/adventurer-neutral/svg?seed="${seed}"`}/>
            <div className='header_info'>
                <h3>Room name</h3>
                <p>Last seen at...</p>
            </div>
            <div className='chat_headerRight'>
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
        </div>
        <div className='chat_body'></div>
        <div className='chat_footer'></div>
    </div>
  )
}

export default Chat