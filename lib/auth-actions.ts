export interface LoginResponse {
    access_token: string;
    refresh_token: string;
    user: {
        username: string;
        email: string;
        full_name: string;
    };
}

export interface RegisterData {
    username: string;
    email: string;
    password: string;
    password2: string;
    full_name: string;
    phone: string;
    gender: string;
}

export async function loginUser(data: FormData): Promise<any> {
    const response = await fetch("http://127.0.0.1:8000/api/v1/auth/login/", {
        method: "POST",
        body: data,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || response.statusText);
    }

    return response.json();
}

export async function registerUser(data: FormData): Promise<any> {
    const response = await fetch("http://127.0.0.1:8000/api/v1/auth/register/", {
        method: "POST",
        body: data,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || response.statusText);
    }

    return response.json();
}
