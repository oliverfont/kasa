import background from '../assets/IMG.png'
import '../styles/Banner.css'

function Banner() {
    return <div class="banner">
                <img src={background} alt='background banner' className='bgBanner' />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
}

export default Banner
