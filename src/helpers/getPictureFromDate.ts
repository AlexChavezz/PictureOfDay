import moment from "moment";
import { API_KEY } from "../Key/API_KEY";

export const getPictureFromDate = async ( date: string ) => {
    let response;
    try {
        const data = await fetch(`https://api.nasa.gov/planetary/apod?date=${moment(date).year()}-${ moment( date ).month() + 1 }-${ moment( date ).date() }&api_key=${API_KEY}`);
           response = await data.json();
    } catch (error) {
        throw new Error("Error to get data");
    }
    return response;
}