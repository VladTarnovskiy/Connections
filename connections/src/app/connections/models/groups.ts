export interface IGroupsResp {
  Count: number;
  Items: [
    {
      id: {
        S: string;
      };
      name: {
        S: string;
      };
      createdAt: {
        S: string;
      };
      createdBy: {
        S: string;
      };
    }
  ];
}

export interface IGroup {
  id: string;
  name: string;
  createdAt: string;
  createdBy: string;
}

export interface IReqGroupDialogMessage {
  groupID: string;
  message: string;
  authorID: string;
  createdAt: string;
}
