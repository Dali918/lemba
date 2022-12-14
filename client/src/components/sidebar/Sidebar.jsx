import React from 'react'
import "./sidebar.css"
import {HomeOutlined, NotificationsOutlined, BookmarkAddOutlined, Event,MenuOutlined} from "@mui/icons-material"


export default function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <HomeOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Home</span>
                    </li>
                    <li className="sidebarListItem">
                        <NotificationsOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Notifications</span>
                    </li>
                    <li className="sidebarListItem">
                        <BookmarkAddOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Saved</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <MenuOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemText">Menu</span>
                    </li>
                    
                </ul>

                

                <hr className='sidebarHr'/>
               
            </div>
        </div>
    )
}