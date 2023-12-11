export interface IRespUserData {
  uid: string;
  token: string;
}

export interface UserDetails {
  password: string | null;
  email: string | null;
  name: string | null;
}

export interface IUserDataStorage {
  uid: string;
  token: string;
  email: string;
}
