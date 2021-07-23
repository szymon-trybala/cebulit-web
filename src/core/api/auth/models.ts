import { Build } from "../builds/models";

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

export interface PasswordChangeParams {
  currentPassword: string;
  newPassword: string;
}

export interface BuildOrderParams {
  buildId: number;
}

export interface BuildOrder {
  id: number;
  price: number;
  build: Build;
}
