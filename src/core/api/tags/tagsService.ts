import { Tag, TagMatch } from "./models";

async function getAll(): Promise<Tag[]> {
  try {
    const response = await fetch("api/tags/getAll", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return Promise.reject(new Error("Błąd serwera"));
    }
    const body = (await response.json()) as Tag[];
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

async function getForUser(): Promise<TagMatch[]> {
  try {
    const token = localStorage.getItem("token");
    if (!token || token === null || token.length < 1)
      return Promise.reject(new Error("Błąd autoryzacji"));

    const response = await fetch("api/tags/getForUser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 401)
      return Promise.reject(new Error("Błąd autoryzacji"));
    if (!response.ok) return Promise.reject(new Error("Błąd serwera"));

    const body = (await response.json()) as TagMatch[];
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

export const tagsService = {
  getAll,
  getForUser,
};
