import type { AxiosInstance } from "axios";

export function setupInterceptors(apiClient: AxiosInstance): void {
    
    apiClient.interceptors.request.use(
        (config) => {
            // You can modify the request config here, for example, add an authorization header
            // config.headers['Authorization'] = `Bearer ${token}`;
            return config;
        }
    )

    apiClient.interceptors.response.use(
        (config) => {
            // You can modify the response config here, for example, handle global errors
            return config;
        },
        (error) => {
            // Handle errors globally here, for example, log them or show a notification
            return Promise.reject(error);
        }
    )
}