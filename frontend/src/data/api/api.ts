import axios from "axios";

const mapboxToken = import.meta.env.VITE_ACCESS_TOKEN_MAP_BOX;

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}