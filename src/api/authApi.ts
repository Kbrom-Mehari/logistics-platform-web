import apiClient from "./axios";
import type { LoginRequest, RegisterRequest, LoginResponse, CurrentUser } from "../types/auth";

export async function register(request: RegisterRequest): Promise<void>{
    await apiClient.post<void>(
        "/auth/register",
        request
    );
}

export async function login(request: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.post<LoginResponse>(
        "/auth/login",
        request
    );
    return response.data;
}

export async function refreshToken(): Promise<void> {
    await apiClient.post(
        "/auth/refresh-token"
    );
}

export async function logout(): Promise<void> {
    await apiClient.post(
        "/auth/logout"
    );
}

export async function getCurrentUser(): Promise<CurrentUser> {
    const response = await apiClient.get<CurrentUser>(
        "/auth/me"
    );
    return response.data;
}