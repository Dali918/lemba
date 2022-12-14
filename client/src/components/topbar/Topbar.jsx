import React from "react";
import "./topbar.css"
import { Search} from "@mui/icons-material"

export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">LEMBA</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar"> 
                <Search className="searchIcon"/>
                <input placeholder="Search for friend, post or video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarRightCenter">Topics</div>
            </div>
        </div>
    )
}