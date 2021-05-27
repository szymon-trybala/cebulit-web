import { Tag } from "./models";

async function getAll(): Promise<Tag[]> {
  const response = await fetch("Tags/GetAll", {
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
}

export const tagsService = {
  getAll,
};
