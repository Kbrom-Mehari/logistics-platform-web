import axios, { type AxiosError, type AxiosInstance } from "axios";
import { ApiException } from "../types/api";

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
        (error: unknown) => {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<{ message?: string; error?: string }>;
                const statusCode = axiosError.response?.status;
                const responseData = axiosError.response?.data;
                const message = responseData?.message ?? responseData?.error ?? axiosError.message;

                if (statusCode) {
                    return Promise.reject(new ApiException(message, statusCode));
                }
            }

            // Handle errors globally here, for example, log them or show a notification
            return Promise.reject(error);
        }
    ) 
}