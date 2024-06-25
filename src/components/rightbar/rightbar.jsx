import './rightbar.css'
import potaFoster from './gift.png'
import rightbarImg from './ad.png'
import Shereen from './shereen.jpg'
import Mohammed from './mohammed.jpg'
import Sara from './sara.jpg'
import Ali from './ali.jpg'
import Mona from './mona.jpg'
import Ahmed from './ahmed.jpg'

export default function Rightbar() {
  return (
    <div className='rightbar'>
      
      <div className='potaFoster'>
        <img src={potaFoster} alt='potaFoster' />
        <p>Pota Foster <span>and</span> 3 other friends <span>have a birthday today</span></p>
      </div>

      <div className='rightbarImg'>
        <img src={rightbarImg} alt='img' />
      </div>

      <hr/>

      <div className='sidebarContacts'>
        <h2>Online Friends</h2>

      <div className='Shereen contact'>
      <img src={Shereen} className='img' alt='Shereen'/>
      <span className='contactOline'></span>
      <h4 className='titleLink'>Shereen Emad</h4>
      </div>

      <div className='Mohammed contact'>
      <img src={Mohammed} className='img' alt='Mohammed'/>
      <span className='contactOline'></span>
      <h4 className='titleLink'>Mohammed Emad</h4>
      </div>

      <div className='Sara contact'>
      <img src={Sara} className='img' alt='Sara'/>
      <span className='contactOline'></span>
      <h4 className='titleLink'>Sara Sherif</h4>
      </div>

      <div className='Ali contact'>
      <img src={Ali} className='img' alt='Ali'/>
      <span className='contactOline'></span>
      <h4 className='titleLink'>Ali Mohammed</h4>
      </div>

      <div className='Mona contact'>
      <img src={Mona} className='img' alt='Mona'/>
      <span className='contactOline'></span>
      <h4 className='titleLink'>Mona Ahmed</h4>
      </div>

      <div className='Ahmed contact'>
      <img src={Ahmed} className='img' alt='Ahmed'/>
      <span className='contactOline'></span>
      <h4 className='titleLink'>Ahmed Islam</h4>
      </div>

      </div>

      
    </div>
  )
}
