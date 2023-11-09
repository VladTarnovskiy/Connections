export interface CardsInfo {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Card[];
}

export interface Card {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      high: Thumbnails;
      standard: Thumbnails;
      maxres: Thumbnails;
    };
    channelTitle: string;
    tags: Array<string>;
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: Statistics;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface SearchCardsInfo {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: SearchPageInfo;
  items: SearchCard[];
}

interface SearchPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface SearchCard {
  kind: string;
  etag: string;
  id: Id;
}

interface Id {
  kind: string;
  videoId: string;
}
