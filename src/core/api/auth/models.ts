export interface User {
  id: number;
  login: string;
  token: string;
}

export interface LoginDto {
  login: string;
  password: string;
}

export interface RegisterDto {
  login: string;
  password: string;
}
