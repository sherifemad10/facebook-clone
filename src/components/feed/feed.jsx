import './feed.css'
import Posts from '../data/dummydata'
import Share from '../share/share';
import Postss from '../posts/posts';




 
export default function Feed() {
  return (
    <div className='feed'>

     <Share/>

     {Posts.map((ele) =>(
      <Postss key={ele.id} post={ele} />
     ))}
      
      
    </div>
  )
}
