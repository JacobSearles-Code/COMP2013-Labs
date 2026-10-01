import type { ResortListing } from "../data/data.ts";

export default function ResortCard({pic, country, location, rating, price}: ResortListing) {
    return (
        <div className="resortCard">
            <img src={pic} alt="" width="90%" height="500vw"/>
            <h2>{country}</h2>
            <p className="hotelName">{location}</p>
            <p style={{color: rating > 4.0 ? "green": "red"}}>{rating}★</p>
            <p className="hotelPrice">${price}/night</p>
        </div>
    );
}