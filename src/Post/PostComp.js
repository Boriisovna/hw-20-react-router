import React from 'react';
import './Post.css';
import share from '../assets/share.svg'
import heart from '../assets/heart.svg'
import download from '../assets/download.svg'
import bubble from '../assets/bub.svg'


function PostComponent({author,content,image,date}) {

    
    return ( 
        <div className='wrapper_post'>
         <div className='post'>
             <header>
                 <div className='avatar'>
                     <img src={author.photo} alt="" />
                 </div>
                 <div className='info'>
                     <div className="info_name">
                         <span>{author.name}</span>
                         <span className='nickname'>{author.nickname}</span>
                         <span className='date'>{date}</span>
                     </div>
                     <div className="info_text">
                     <span>{content}</span>
                     </div>
                 </div>
             </header>
             <main>
                 <div className="photo_post">
                     <img src={image} alt="" />
                 </div>
                 <div className="icons">
                 <span><img src={bubble} alt="" /> &nbsp; 82</span>
                 <span><img src={share} alt="" /> &nbsp;146</span>
                 <span><img src={heart} alt="" /> &nbsp;750</span>
                 <span><img src={download} alt="" /></span>
                 </div>
             </main>
         </div>
         </div>
        )
    }

    export default PostComponent;