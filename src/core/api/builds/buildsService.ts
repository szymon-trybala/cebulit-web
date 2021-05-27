import { Build } from "./models";

async function getAll(): Promise<Build[]> {
  try {
    const response = await fetch("Builds", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response || !response.ok) return Promise.reject(new Error("Błąd serwera"));
    else if (response.status === 401)
      return Promise.reject(new Error("Błąd autoryzacji użytkownika"));

    const body = (await response.json()) as Build[];
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

export const buildsService = {
  getAll,
};
