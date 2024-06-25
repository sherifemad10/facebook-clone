import { useRef, useState } from 'react';
import './posts.css'
import { FaRegComment } from "react-icons/fa6"
import { MdMoreVert } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFatBold } from "react-icons/pi";
import like from '../feed/post/like.png'
 import love from '../feed/post/heart.png'

export default function Postss({post}) {
 const [liked , setliked] = useState(post.likes)
 const [likeColor , setlikeColor] = useState("noColor")
 const likestyle = useRef()

 const likehandel = () => {

        if (likeColor === "noColor") {
          setlikeColor('colorLike')
          setliked(liked+1)
        }else{
          setlikeColor("noColor")
          setliked(liked-1)

        }

    }
    
    
 
  return (
    <div className='Posts'>
          <div className='posts' >

<div className='postProfile'>

  {/* <p className='postId'>{ele.id}</p> */}

  <div className='postProfileleft'>
  <img src={post.porfile} alt='profile' />
  <h4>{post.user}</h4>
  <p>{post.data}</p>
  </div>

  <div className='postProfileright'>
  <MdMoreVert className='moreIcon'/>
</div>

</div>

<div className='postTittle'>
  <h3>{post.desc}</h3>
</div>

<div className='postImg'>
  <img src={post.img} alt='img' />
</div>

<div className='postBottom'>
  <div className='postBottomLeft'>
     <img className='likeIcon' src={like}  alt='like' />
     <img className='likeIcon' src={love}   alt='love' />
     <span className='postLikeCounter'>{liked}</span>
  </div>

  <div className='postBottomRight'>
  <span className='postCommentCounter'>{post.comment} comments</span>
  </div>


</div>

<hr/>

<div className='postFooter'>
    <div className='postFooterLike actions'>
       <AiOutlineLike className= {`actionIcon ${likeColor}`}  onClick={likehandel} ref={likestyle}/>
       <span>Like</span>
       
    </div>

    <div className='postFooterComment actions'>
       <FaRegComment className='actionIcon'/>
       <span>Comment</span>
    </div>

    <div className='postFootershare actions'>
      <PiShareFatBold className='actionIcon'/>
       <span>Share</span>
    </div>
 

    </div>



</div>
       
       
    </div>
  )
}
