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

export interface IReqConversationMessage {
  conversationID: string;
  message: string;
  authorID: string;
  createdAt: string;
}
