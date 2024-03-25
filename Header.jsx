
import globeIcon from './src/assets/globe-icon.png'

export default function Header() {
    return (
        <section className="header">
            <img classname="header-icon" src={globeIcon} alt={`Icon of the globe`} />
            <h1 className='header-title'>my travel journal.</h1>
        </section>
    )
}