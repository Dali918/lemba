import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import { PlayCircleOutline, GraphicEqOutlined, BookmarkOutlined} from "@mui/icons-material"

export default function Profile() {
  return (
    <div>
          <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                  <div className="profileRightTop">
                    <div className="profileCover">
                      <img className='profileCoverImg' src="assets/post/post1.jpeg" alt="" />
                      <img className='profileUserImg' src="assets/person/person2.jpeg" alt="" />
                    </div>
                    <div className="profileInfo">
                      <h4 className='profileInfoName' >Jessica Bonet</h4>
                      <span className="profileInfoDesc"> College Student</span>
                    </div>
                  </div>
                  <div className="profileRightBottom">
                    
                      <span className='profileTitle'>Post title</span>
                      <PlayCircleOutline className='icons'/>
                      <GraphicEqOutlined className='icons'/>
                      <BookmarkOutlined className='icons'/>
                     
                   
                    
              
                  </div>
                  <br />
                  <hr />
                  <div className="content"> <br />
                    <h1>This is heading 1</h1> <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur facere repellat deleniti ratione! Unde, necessitatibus eum officia repellendus at exercitationem pariatur est consequuntur, itaque sequi error laborum dignissimos libero! Impedit, ducimus ipsam dolore mollitia optio in 
                      excepturi explicabo sint earum eos accusantium fugit. Voluptatem, officia doloribus! Itaque ipsum magnam minima!</p>
                      <h1>This is heading 1</h1> <br />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur facere repellat deleniti ratione! Unde, necessitatibus eum officia repellendus at exercitationem pariatur est consequuntur, itaque sequi error laborum dignissimos libero! Impedit, ducimus ipsam dolore mollitia optio in 
                      excepturi explicabo sint earum eos accusantium fugit. Voluptatem, officia doloribus! Itaque ipsum magnam minima!</p>
                  </div>
                
                </div>
                
            </div>
           
        </div>
  )
}
