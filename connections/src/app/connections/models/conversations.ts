export interface IConversationsResp {
  Count: number;
  Items: [
    {
      id: {
        S: string;
      };
      companionID: {
        S: string;
      };
    }
  ];
}

export interface IConversations {
  id: string;
  companionID: string;
}
