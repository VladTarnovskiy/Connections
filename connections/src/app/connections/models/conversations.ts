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

export interface IConversation {
  id: string; // conversation id
  companionID: string; // conversation parter's id
}
