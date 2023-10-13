import { commonrequest } from "./axios"
import { BASE_URL } from "./helper"


// getting meembers
export const allUserGetFunction = async () => {
    return await commonrequest('GET', `${BASE_URL}/user/all`, "")
}

// getting all tourist places
