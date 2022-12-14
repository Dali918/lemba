import React from "react";
import "./topbar.css"
import { Search} from "@mui/icons-material"

export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <a className="logo text-decoration-none" href="/">LEMBA</a>
            </div>
            <div className="topbarCenter">
                <div className="searchbar"> 
                <Search className="searchIcon"/>
                <input placeholder="Search for friend, post or video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                {/* <div className="topbarRightCenter">Topics</div> */}
                <a className="btn d-flex flex-row align-items-center justify-content-center px-2 mx-3 rounded-pill text-decoration-none btn-outline-dark" style={{float: "right"}} href="/me">
                    <i style={{fontSize : "30px"}} class="bi bi-person-circle"></i>
                    <p className="m-0 mx-1" style={{fontSize : "20px"}}>Jessica Bonet</p>
                </a>
                
            </div>
        </div>
    )
}