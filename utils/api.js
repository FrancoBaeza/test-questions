const port = process.env.API_PORT || 'http://localhost:3000';

export const login = async (data) => {
    const response = await fetch(`${port}/api/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const value = await response.json();

    if (response.status !== 200) {
        console.log(`[${new Date().toLocaleString()}]- Fail to login: ${response.status} - ${response.statusText}`)
        return Promise.reject(value);
    }

    return value;
}

export const register = async (data) => {
    const response = await fetch(`${port}/api/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify(data)
    });

    const value = await response.json();

    if (response.status !== 201) {
        console.log(`[${new Date().toLocaleString()}]- Fail to register: ${response.status} - ${response.statusText}`)
        return Promise.reject(value);
    }

    return value;
}