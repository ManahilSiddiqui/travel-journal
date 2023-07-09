import Reacr from 'react'
import gps from '../images/Fill219.png'

export default function Card(props) {

    

    return (
        <div className='card'>
            <img src={props.imageUrl} className="card--image" alt="Scenery" />

            <div className='card--text'>
                <div className="firstLine">
                    <img src={gps} className="card--gps" alt="GPS" />
                    <p className="card--location">{props.location}</p>
                    <a className="card--googleMapsUrl" href={props.googleMapsUrl}> View on Google Maps </a>
                </div>
                <p className="card--title"> {props.title}</p>

                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
            </div>
            
    )
}