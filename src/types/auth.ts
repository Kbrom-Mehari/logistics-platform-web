export interface RegisterRequest {
    email: string;
    password: string;
}

export interface ApiError {
    message: string;
    statusCode: number;
    error: string;
    timestamp: string;
}

export interface RegisterResponse {
    roles: string[];
    permissions: string[];
}