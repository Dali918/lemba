import React from 'react'
import "./rightbar.css"

export default function Rightbar(){
    const HomeRightBar = () =>{
        return(
            <>
            <div className="topicsContainer">
                    
                    <span className='topicsText'> #photography</span>
                    <span className='topicsText'> #travel</span>
                    
                </div>
                <div className="topicsContainer">
                    
                    <span className='topicsText'> #winter</span>
                    <span className='topicsText'> #spring</span>
                    
                </div>
                <div className="topicsContainer">
                    
                    <span className='topicsText'> #Jamaica</span>
                    <span className='topicsText'> #Australia</span>
                    
                </div></>
        )
    }
   
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <HomeRightBar />
            </div>

        </div>
    )
}