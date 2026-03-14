import { jwtDecode } from "jwt-decode";
import { getAuthToken } from "../api/client";

export const getUserId = () => {
    const token = getAuthToken();
    const decode = jwtDecode(token);
    return decode.sub;
}