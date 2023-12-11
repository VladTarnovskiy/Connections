export interface IProfileResp {
  email: {
    S: string;
  };
  name: {
    S: string;
  };
  uid: {
    S: string;
  };
  createdAt: {
    S: string; // unix timestamp in milliseconds
  };
}

export interface IProfile {
  email: string;
  name: string;
  uid: string;
  createdAt: string;
}
