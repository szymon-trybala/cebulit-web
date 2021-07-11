import { TagMatch } from "../tags/models";
import { LoginDto, PasswordChangeParams, RegisterDto, User } from "./models";

async function login(loginDto: LoginDto): Promise<User> {
  try {
    const response = await fetch("api/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDto),
    });
    if (response.status === 401) {
      return Promise.reject(new Error("Błędne dane logowania"));
    } else if (!response.ok) {
      return Promise.reject(new Error("Błąd serwera"));
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

async function register(registerDto: RegisterDto): Promise<User> {
  try {
    const response = await fetch("api/auth/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerDto),
    });

    if (!response.ok) {
      return Promise.reject(new Error("Błąd serwera"));
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

async function changePassword(
  changeParams: PasswordChangeParams
): Promise<void> {
  try {
    const token = localStorage.getItem("token");
    if (!token || token === null || token.length < 1)
      return Promise.reject(new Error("Błąd autoryzacji"));

    const response = await fetch("api/auth/changePassword", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(changeParams),
    });
    if (response.status === 401)
      return Promise.reject(new Error("Błąd autoryzacji"));
    if (!response.ok) return Promise.reject(new Error("Błąd serwera"));
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}

async function setTags(tagMatches: TagMatch[]): Promise<void> {
  try {
    const token = localStorage.getItem("token");
    if (!token || token === null || token.length < 1)
      return Promise.reject(new Error("Błąd autoryzacji"));

    const response = await fetch("api/auth/setTags", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tagMatches),
    });
    if (response.status === 401)
      return Promise.reject(new Error("Błąd autoryzacji"));
    if (!response.ok) return Promise.reject(new Error("Błąd serwera"));
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error("Błąd serwera"));
  }
}
export const authService = {
  login,
  register,
  setTags,
  changePassword,
};
