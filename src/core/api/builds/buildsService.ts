import {Build} from "./models";

async function getAll(): Promise<Build[]> {
    const response = await fetch("Builds", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
    })
    if (response.status === 401)
        return Promise.reject(new Error("Błąd autoryzacji użytkownika"));
    else if (!response.ok)
        return Promise.reject(new Error("Błąd serwera"));

    const body = await response.json();
    return body;
}

export const buildsService = {
    getAll
}
