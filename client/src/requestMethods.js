import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/"

const TOKEN =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmI0NWRmYzhmMTNlNDVkNmQ0MGYyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDcyNDY2MCwiZXhwIjoxNjYwODExMDYwfQ.omf50Pj1E6ojoy60Wp5OEOit1_1OBsknVdt3k4f4B68"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
})