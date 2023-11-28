import { FilterPipe } from './filter.pipe';

export const mockCardsInfo = [
  {
    kind: 'youtube#video',
    etag: 'nz24ZjyncPsg-XIQvwS3GBYUdUk',
    id: 'aEEg9UxJkgY',
    snippet: {
      publishedAt: '2023-11-26T10:10:52Z',
      channelId: 'UC7wafFu5c8AO0YF5U7R7xFA',
      title:
        '🔴 24/7 LIVE: Cat TV for Cats to Watch 😺 Hopping Birds and Squirrels 4K',
      description:
        'Non-stop live streaming for cats, dogs, parrots, or other nature lovers. Relaxing your pets can help minimize separation anxiety. The sounds of nature and birdsong are perfect as background or calming music for studying or sleeping.\n\nLike, Super Thanks, subscribe. Any support is welcome.\n\n#birderking',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/default_live.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/mqdefault_live.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/hqdefault_live.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/sddefault_live.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/maxresdefault_live.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Birder King',
      tags: [
        'birder king',
        'bird king',
        'cat tv for cats to watch',
        'videos for cats to watch',
        'cat tv birds',
        'bird song',
        'relaxing',
        'nature sounds',
        'bird sounds',
        'dog tv',
        'wildlife',
        'kitty tv',
      ],
      categoryId: '15',
      liveBroadcastContent: 'live',
      defaultLanguage: 'en-US',
      localized: {
        title:
          '🔴 24/7 LIVE: Cat TV for Cats to Watch 😺 Hopping Birds and Squirrels 4K',
        description:
          'Non-stop live streaming for cats, dogs, parrots, or other nature lovers. Relaxing your pets can help minimize separation anxiety. The sounds of nature and birdsong are perfect as background or calming music for studying or sleeping.\n\nLike, Super Thanks, subscribe. Any support is welcome.\n\n#birderking',
      },
      defaultAudioLanguage: 'en',
    },
    statistics: {
      viewCount: '57900',
      likeCount: '355',
      dislikeCount: '4',
      favoriteCount: '0',
      commentCount: '0',
    },
  },
  {
    kind: 'youtube#video',
    etag: 'nz24ZjyncPsg-XIQvwS3GBYUdUk',
    id: 'aEEg9UxJkgY',
    snippet: {
      publishedAt: '2023-11-26T10:10:52Z',
      channelId: 'UC7wafFu5c8AO0YF5U7R7xFA',
      title: 'Cat TV for Cats to Watch 😺 Hopping Birds and Squirrels 4K',
      description:
        'Non-stop live streaming for cats, dogs, parrots, or other nature lovers. Relaxing your pets can help minimize separation anxiety. The sounds of nature and birdsong are perfect as background or calming music for studying or sleeping.\n\nLike, Super Thanks, subscribe. Any support is welcome.\n\n#birderking',
      thumbnails: {
        default: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/default_live.jpg',
          width: 120,
          height: 90,
        },
        medium: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/mqdefault_live.jpg',
          width: 320,
          height: 180,
        },
        high: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/hqdefault_live.jpg',
          width: 480,
          height: 360,
        },
        standard: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/sddefault_live.jpg',
          width: 640,
          height: 480,
        },
        maxres: {
          url: 'https://i.ytimg.com/vi/aEEg9UxJkgY/maxresdefault_live.jpg',
          width: 1280,
          height: 720,
        },
      },
      channelTitle: 'Birder King',
      tags: [
        'birder king',
        'bird king',
        'cat tv for cats to watch',
        'videos for cats to watch',
        'cat tv birds',
        'bird song',
        'relaxing',
        'nature sounds',
        'bird sounds',
        'dog tv',
        'wildlife',
        'kitty tv',
      ],
      categoryId: '15',
      liveBroadcastContent: 'live',
      defaultLanguage: 'en-US',
      localized: {
        title:
          '🔴 24/7 LIVE: Cat TV for Cats to Watch 😺 Hopping Birds and Squirrels 4K',
        description:
          'Non-stop live streaming for cats, dogs, parrots, or other nature lovers. Relaxing your pets can help minimize separation anxiety. The sounds of nature and birdsong are perfect as background or calming music for studying or sleeping.\n\nLike, Super Thanks, subscribe. Any support is welcome.\n\n#birderking',
      },
      defaultAudioLanguage: 'en',
    },
    statistics: {
      viewCount: '57900',
      likeCount: '355',
      dislikeCount: '4',
      favoriteCount: '0',
      commentCount: '0',
    },
  },
];

describe('FilterPipe', () => {
  const pipe = new FilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('check data filter', () => {
    const filteredData = pipe.transform(mockCardsInfo, 'LIVE');
    expect(filteredData.length).toBe(1);
  });

  it('check filter without search data', () => {
    const filteredData = pipe.transform(mockCardsInfo);
    expect(filteredData.length).toBe(2);
  });

  it('check filter without data', () => {
    const filteredData = pipe.transform(undefined, 'LIVE');
    expect(filteredData).toStrictEqual([]);
  });
});
