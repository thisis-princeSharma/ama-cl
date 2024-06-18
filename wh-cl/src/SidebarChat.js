import React, { useState, useEffect } from 'react';
import { Avatar } from "@mui/material"
import './SidebarChat.css';

function SidebarChat({ addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    const createChat = () => {
        const roomName = prompt("Enter Contact Name")
        if (roomName) {
            // clever stuff 
        }

    };
    return !addNewChat ? (
        <div className='sidebarChat'>
            {/* Adjust props passed to Avatar component */}
            <Avatar src={`https://api.dicebear.com/8.x/adventurer-neutral/svg?seed="${seed}"`} />
            <div className='sidebarChat_info'>
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat;
