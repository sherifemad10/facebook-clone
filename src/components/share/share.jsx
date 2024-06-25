import './share.css'
import profileImg from '../feed/sherif.jpg'
import { IoMdPricetags } from "react-icons/io"
import { FaLocationDot, FaFaceGrinBeam } from "react-icons/fa6"
import { MdInsertPhoto} from "react-icons/md";

export default function Share() {
  
  return (
    <div className='share'>
       <div className='createPost'>
        <div className='createPosttext'>
          <img src={profileImg} alt='profile' />
          <textarea placeholder='What is on your mind?' id='create'></textarea>
          </div>
          <hr/>

          <div className='imgOfpost'>
            {/* <img src={imgUpload.current.src} alt='img' /> */}
          </div>

          <div className='uploadPost'>
            <div className='uploadImg postIcons'>
              <label for="upload" className='Upload'>
            <MdInsertPhoto className='iconUpload'/>
            <h4 className='linkPost'>Photo/Video</h4>
            </label>
            <input type='file' id='upload'/>
            </div>

            <div className='Tag postIcons'>
            <IoMdPricetags className='iconTag'/>
            <h4 className='linkPost'>Tag</h4>
            </div>

            <div className='Location postIcons'>
            <FaLocationDot className='iconUpLocation'/>
            <h4 className='linkPost'>Location</h4>
            </div>

            <div className='Feelings postIcons'>
            <FaFaceGrinBeam className='iconUploadFeel'/>
            <h4 className='linkPost'>Feelings</h4>
            </div>

            <div className='Post'>
            <button className='post'>Post</button>
            </div>

          </div>

        
      </div>
    </div>
  )
}
