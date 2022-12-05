import React from 'react'
import "./post.css"
import {MoreVert, FavoriteOutlined, PlayCircleOutline, GraphicEqOutlined,BookmarkAddOutlined, BookmarkOutlined} from '@mui/icons-material'
import {Users} from "../../dummyData"
import {useState } from "react"

export default function Post({post}) {
   const [like, setLike] = useState(post.like);
   const [isLiked, setIsLiked] = useState(false);
   const [book, setBook] = useState(false);

   const likeHandler = () =>{
    setLike( isLiked ? like-1: like+1)
    setIsLiked(!isLiked)
   }

   const bookHandler = () =>{
    
    setBook(!book)
   }
   
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter( (u) => u.id === post.userId)[0].profilePicture} alt="" />
                    <span className="postUsername">{Users.filter( (u) => u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.description}</span>
                {/* src={post.photo} */}
                <img className='postImg' src="assets/post/post6.webp" alt="" />
            </div>
            <div className="postBottom">
                
                <div className="postBottomLeft">
                    <h1>{post.title}</h1>
                    <br />
                    <p>This is a simple note with some sample article text</p>
                    <br /><br /><br /><br /><br /><br />
                    <FavoriteOutlined className='likeIcon' onClick={likeHandler}  alt="" />
                    <span className="postlikeCounter">{like}</span>
                    <PlayCircleOutline className='playIcon'/>
                    <GraphicEqOutlined className='audioIcon'/>
                    <span onClick={bookHandler}>{book? <BookmarkOutlined className='saveIcon'/> : <BookmarkAddOutlined className='saveIcon'/>}</span>
                </div>

                <div className="line"></div>
                <div className="postBottomRight">
                    
                    <p>This is the bottom right part</p>
                </div>
            </div>
        </div>
    </div>
  )
}
