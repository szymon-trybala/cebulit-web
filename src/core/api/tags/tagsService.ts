import { Tag } from "./models";

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

export const tagsService = {
  getAll,
};
