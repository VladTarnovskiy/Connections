export interface IPeopleResp {
  Count: number;
  Items: [
    {
      name: {
        S: string;
      };
      uid: {
        S: string;
      };
    }
  ];
}

export interface IPerson {
  name: string;
  uid: string;
  haveConversationID?: boolean;
}
