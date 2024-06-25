import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/sidebar/sidebar'
import './home.css'
 function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
  )
}

export default Home
