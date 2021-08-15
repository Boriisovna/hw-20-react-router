import React from 'react';
import './Post.css';
import share from '../assets/share.svg'
import heart from '../assets/heart.svg'
import download from '../assets/download.svg'
import bubble from '../assets/bub.svg'


function PostComponent(props) {

    
    return ( 
        <div className='wrapper_post'>
         <div className='post'>
             <header>
                 <div className='avatar'>
                     <img src={props.photo} alt="" />
                 </div>
                 <div className='info'>
                     <div className="info_name">
                         <span>{props.name}</span>
                         <span className='nickname'>{props.nickname}</span>
                         <span className='date'>{props.date}</span>
                     </div>
                     <div className="info_text">
                     <span>{props.content}</span>
                     </div>
                 </div>
             </header>
             <main>
                 <div className="photo_post">
                     <img src={props.image} alt="" />
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