export interface IRegistration {
  login: string;
  token: string;
}

export interface UserDetails {
  password: string | null;
  email: string | null;
  name: string | null;
}
