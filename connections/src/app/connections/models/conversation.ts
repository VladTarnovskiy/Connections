export interface IConversationResp {
  Count: number;
  Items: [
    {
      authorID: {
        S: string;
      };
      message: {
        S: string;
      };
      createdAt: {
        S: string;
      };
    }
  ];
}

export interface IMessage {
  authorID: string;
  message: string;
  createdAt: string;
}
