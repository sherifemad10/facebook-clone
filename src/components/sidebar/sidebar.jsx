import './sidebar.css'
import { MdOutlineRssFeed } from "react-icons/md"
import { FaFacebookMessenger } from "react-icons/fa"
import { MdVideoLibrary } from "react-icons/md"
import { HiUserGroup } from "react-icons/hi2"
import { IoBookmarks } from "react-icons/io5"
import { BsFillQuestionSquareFill } from "react-icons/bs"
import { PiBagSimpleFill } from "react-icons/pi"
import { BsCalendarEventFill } from "react-icons/bs"
import { FaAngleDown } from "react-icons/fa6"
import Shereen from './shereen.jpg'
import Mohammed from './mohammed.jpg'
import Sara from './sara.jpg'
import Ali from './ali.jpg'
import Mona from './mona.jpg'
import Ahmed from './ahmed.jpg'








export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebarCon'>

      <div className='feedCon link'>
      <MdOutlineRssFeed className='linkIcons'/>
      <h4 className='titleLink'>Feed</h4>
      </div>

      <div className='chatsCon link'>
      <FaFacebookMessenger className='linkIcons'/>
      <h4 className='titleLink'>Chats</h4>
      </div>

      <div className='videoCon link'>
      <MdVideoLibrary className='linkIcons'/>
      <h4 className='titleLink'>Video</h4>
      </div>

      <div className='groupsCon link'>
      <HiUserGroup className='linkIcons'/>
      <h4 className='titleLink'>Groups</h4>
      </div>

      <div className='bookmarksCon link'>
      <IoBookmarks className='linkIcons'/>
      <h4 className='titleLink'>Bookmarks</h4>
      </div>

      <div className='questionsCon link'>
      <BsFillQuestionSquareFill className='linkIcons'/>
      <h4 className='titleLink'>Questions</h4>
      </div>

      <div className='JobsCon link'>
      <PiBagSimpleFill className='linkIcons'/>
      <h4 className='titleLink'>Jobs</h4>
      </div>

      <div className='eventsCon link'>
      <BsCalendarEventFill className='linkIcons'/>
      <h4 className='titleLink'>Events</h4>
      </div>

      <div className='showMore link'>
      <FaAngleDown className='showicon'/>
      <button className='btnicon'>Show More</button>
      </div>

      </div>

      <div className='sidebarContacts'>

      <div className='Shereen contact'>
      <img src={Shereen} className='img' alt='Shereen'/>
      <h4 className='titleLink'>Shereen Emad</h4>
      </div>

      <div className='Mohammed contact'>
      <img src={Mohammed} className='img' alt='Mohammed'/>
      <h4 className='titleLink'>Mohammed Emad</h4>
      </div>

      <div className='Sara contact'>
      <img src={Sara} className='img' alt='Sara'/>
      <h4 className='titleLink'>Sara Sherif</h4>
      </div>

      <div className='Ali contact'>
      <img src={Ali} className='img' alt='Ali'/>
      <h4 className='titleLink'>Ali Mohammed</h4>
      </div>

      <div className='Mona contact'>
      <img src={Mona} className='img' alt='Mona'/>
      <h4 className='titleLink'>Mona Ahmed</h4>
      </div>

      <div className='Ahmed contact'>
      <img src={Ahmed} className='img' alt='Ahmed'/>
      <h4 className='titleLink'>Ahmed Islam</h4>
      </div>

      </div>

    </div>
  )
}
