
import locationIcon from './src/assets/location-icon.png'

export default function Destination(props) {
    
    return (
        <section className="destination">
            <img src={props.destination.imageUrl} alt={`Picture of ${props.destination.title}`} className="destination-image"/>
            <div className="destination-inner">
                <div className="destination-inner-location">
                    <img src={locationIcon} alt="Location icon, color red"  className='location-icon'/>
                    <p className="country">{props.destination.location}</p>
                    <a href={props.destination.googleMapsUrl} className="maps-link" target='_blank'>View on Google Maps</a>
                </div>
                <h2 className="title">{props.destination.title}</h2>
                <p className="date">{props.destination.startDate} - {props.destination.endDate}</p>
                <p className="description">{props.destination.description}</p>
            </div>
        </section>
    )
}