import axios from "axios";
import { setupInterceptors } from "./interceptors";

const apiClient = axios.create({
    
    baseURL: "http://localhost:8080",
    timeout: 10000,
    withCredentials: true,  //tells the browser to include cookies for this request
    headers: {
        "content-Type": "application/json"
    }
});

setupInterceptors(apiClient);
export default apiClient;