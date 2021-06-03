import { Build, BuildsFiltersParams } from "./models";

interface TagMatchedBuildsParams {
  tags: string[];
}

async function getTagMatched(
  params?: TagMatchedBuildsParams
): Promise<Build[]> {
  try {
    const response = await fetch("api/builds/getTagMatched", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: params ? JSON.stringify(params) : undefined,
    });
    if (!response || !response.ok)
      return Promise.reject(new Error("Błąd serwera"));
    else if (response.status === 401)
      return Promise.reject(new Error("Błąd autoryzacji użytkownika"));

    const body = (await response.json()) as Build[];
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

async function getFiltered(params?: BuildsFiltersParams): Promise<Build[]> {
  try {
    const response = await fetch("api/builds/getFiltered", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: params ? JSON.stringify(params) : undefined,
    });
    if (!response || !response.ok)
      return Promise.reject(new Error("Błąd serwera"));
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
  getTagMatched,
  getFiltered,
};
