import React from 'react'
import "./sidebar.css"
import {HomeOutlined, NotificationsOutlined, BookmarkAddOutlined, Event,MenuOutlined} from "@mui/icons-material"


export default function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className='sidebarList'>
                    <li className="sidebarListItem">
                        <a href='/' className='text-decoration-none'>
                            <i className="bi bi-house me-2"></i>
                            <span className="sidebarListItemText">Home</span>
                        </a>
                    </li>
                    <li className="sidebarListItem">
                        <a href='/notes' className='text-decoration-none'>
                            <i class="bi bi-journal me-2"></i>
                            <span className="sidebarListItemText">Notes</span>
                        </a>
                    </li>
                    <li className="sidebarListItem">
                        <i className="bi bi-bell me-2"></i>
                        <span className="sidebarListItemText">Notifications</span>
                    </li>
                    <li className="sidebarListItem">
                        <i className="bi bi-bookmark me-2"></i>
                        <span className="sidebarListItemText">Saved</span>
                    </li>
                    <li className="sidebarListItem">
                        <i class="bi bi-calendar-event me-2"></i>
                        <span className="sidebarListItemText">Events</span>
                    </li>

                    <li className="sidebarListItem">
                        <i class="bi bi-list me-2"></i>
                        <span className="sidebarListItemText">Menu</span>
                    </li>
                    
                </ul>

                

                <hr className='sidebarHr'/>
               
            </div>
        </div>
    )
}