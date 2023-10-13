import { commonrequest } from "./Apicall";
import { BASE_URL } from "./helper";

export const addTouristPlaceFunc = async (data, header) => {
    return await commonrequest("POST", `${BASE_URL}/touristplace/add`, data, header);
}

export const allTouristPlaceFunc = async (data, header) => {
    return await commonrequest("GET", `${BASE_URL}/touristplace/all`, data, header);
}
