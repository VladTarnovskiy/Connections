export interface IRespUserData {
  uid: string;
  token: string;
}

export interface UserDetails {
  password: string;
  email: string;
  name: string;
}

export interface IUserDataStorage {
  uid: string;
  token: string;
  email: string;
}
