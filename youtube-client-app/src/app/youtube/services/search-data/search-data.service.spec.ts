import { TestBed } from '@angular/core/testing';
import { SearchDataService } from './search-data.service';
import { provideMockStore } from '@ngrx/store/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Card, CardsInfo } from '../../models/card.model';

describe('SearchDataService', () => {
  let service: SearchDataService;
  let controller: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({})],
    }).compileComponents();
    service = TestBed.inject(SearchDataService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get card', () => {
    const statisticsURL =
      'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=SP3-XdC2IGw';

    let cardInfo: Card | undefined;
    service.getCard('SP3-XdC2IGw').subscribe((card) => {
      cardInfo = card;
    });

    const request = controller.expectOne(statisticsURL);
    request.flush(mockCardsStatisticInfo);

    controller.verify();

    expect(cardInfo?.snippet.publishedAt).toBe('2023-11-29T14:00:20Z');
  });

  it('should get cards', () => {
    const expectedUrl =
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&q=cats';
    const statisticsURL =
      'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=N8siuNjyV7A,WwV1ikzS30k';

    let cardsInfo: CardsInfo | undefined;
    service.getCards('cats').subscribe((cards) => {
      cardsInfo = cards;
    });

    const requestOne = controller.expectOne(expectedUrl);
    requestOne.flush(mockCardsResponseInfo);

    const requestTwo = controller.expectOne(statisticsURL);
    requestTwo.flush(mockCardsStatisticInfo);

    controller.verify();

    expect(cardsInfo!.items.length).toBe(2);
  });
});

const mockCardsStatisticInfo = {
  kind: 'youtube#videoListResponse',
  etag: 'EQxU2yCvIZsn0aPEs_Szp4DDRF8',
  items: [
    {
      kind: 'youtube#video',
      etag: 'iOYvH7igkaRrBHwOFXu8xThxPbc',
      id: 'SP3-XdC2IGw',
      snippet: {
        publishedAt: '2023-11-29T14:00:20Z',
        channelId: 'UCuPLku1Zrk6HMr2S51yGkpQ',
        title: '10 Minutes of the Laziest CATS 😪 Funny Cats Videos 2023',
        description:
          '10 Minutes of the Laziest CATS 😪 Funny Cats Videos 2023\nSit back, relax, and get ready to witness a mix of funny and adorable moments as these cat couch potatoes take laziness to a whole new level.\n\n#cat #funnycat #cat2023 #funny #laziest cat',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/SP3-XdC2IGw/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/SP3-XdC2IGw/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/SP3-XdC2IGw/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/SP3-XdC2IGw/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/SP3-XdC2IGw/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Little Love ',
        tags: [
          'Funniest cat video',
          'funny cat moments',
          'hilarious cat',
          'funny pets',
          'funny',
          'cute',
          'cute animals',
          'funny cat videos',
          'Funniest Animals Video',
          'Funny Video',
          'funny cat 2023',
          'funny cat video 2023',
          'Funny Cats',
          'Cat Videos',
          'Cat Humor',
          'Cat Compilation',
          'Animal Comedy',
          'Crazy Cats',
          '10 Minutes of the Laziest CATS',
          'Laziest CATS',
          'Cats Videos 2023',
          'Lazy Cat Refuses To Move',
          'Hilarious Lazy Cats',
        ],
        categoryId: '15',
        liveBroadcastContent: 'none',
        localized: {
          title: '10 Minutes of the Laziest CATS 😪 Funny Cats Videos 2023',
          description:
            '10 Minutes of the Laziest CATS 😪 Funny Cats Videos 2023\nSit back, relax, and get ready to witness a mix of funny and adorable moments as these cat couch potatoes take laziness to a whole new level.\n\n#cat #funnycat #cat2023 #funny #laziest cat',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '16747',
        likeCount: '415',
        favoriteCount: '0',
        commentCount: '16',
      },
    },
    {
      kind: 'youtube#video',
      etag: '3k8BXMbiVOlvLxRohoIRmU3MkTo',
      id: 'N8siuNjyV7A',
      snippet: {
        publishedAt: '2023-11-16T13:10:18Z',
        channelId: 'UC3yrASSnYnr1rPvTUmU-Qzg',
        title:
          '1 Hour Of Funniest Animals 😅 New Funny Cats and Dogs Videos 😸🐶 Part 14',
        description:
          'Welcome to Naughty Animals funny channel ♥  \nYou can enjoy best funny cats and dogs videos (≧▽≦) \nThanks for watching our videos 😻😻😻\n---\n#funnycats \n#funnydogs \n#funnyanimals \n#funnyvideos\n#cutecats\n#cuteanimals\n#cutedogs\n#catvideos\n#dogvideos\n#animals\n#cats\n#dogs\n#pets\n#funny\n#cute',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'Naughty Animals',
        categoryId: '22',
        liveBroadcastContent: 'none',
        defaultLanguage: 'en',
        localized: {
          title:
            '1 Hour Of Funniest Animals 😅 New Funny Cats and Dogs Videos 😸🐶 Part 14',
          description:
            'Welcome to Naughty Animals funny channel ♥  \nYou can enjoy best funny cats and dogs videos (≧▽≦) \nThanks for watching our videos 😻😻😻\n---\n#funnycats \n#funnydogs \n#funnyanimals \n#funnyvideos\n#cutecats\n#cuteanimals\n#cutedogs\n#catvideos\n#dogvideos\n#animals\n#cats\n#dogs\n#pets\n#funny\n#cute',
        },
        defaultAudioLanguage: 'en',
      },
      statistics: {
        viewCount: '13775124',
        likeCount: '32135',
        favoriteCount: '0',
        commentCount: '817',
      },
    },
  ],
  pageInfo: {
    totalResults: 20,
    resultsPerPage: 20,
  },
};
const mockCardsResponseInfo = {
  kind: 'youtube#searchListResponse',
  etag: 'UYQEty6oVFqr9uQ-TmNgucgfrfc',
  nextPageToken: 'CBQQAA',
  regionCode: 'BY',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 20,
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: 'kzg79nigfiUeycMUpU31UL6snNk',
      id: {
        kind: 'youtube#video',
        videoId: 'N8siuNjyV7A',
      },
      snippet: {
        publishedAt: '2023-11-16T13:10:18Z',
        channelId: 'UC3yrASSnYnr1rPvTUmU-Qzg',
        title:
          '1 Hour Of Funniest Animals 😅 New Funny Cats and Dogs Videos 😸🐶 Part 14',
        description:
          'Welcome to Naughty Animals funny channel ♥ You can enjoy best funny cats and dogs videos (≧▽≦) Thanks for watching our ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/N8siuNjyV7A/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Naughty Animals',
        liveBroadcastContent: 'none',
        publishTime: '2023-11-16T13:10:18Z',
      },
    },
    {
      kind: 'youtube#searchResult',
      etag: 'ipKa6hv-amT5Gcmkg396KFX-SGw',
      id: {
        kind: 'youtube#video',
        videoId: 'WwV1ikzS30k',
      },
      snippet: {
        publishedAt: '2023-06-16T12:06:05Z',
        channelId: 'UCS56r87Y7q1SrAB-42brE-w',
        title: 'Love Story💙 #cat #cats',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/WwV1ikzS30k/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/WwV1ikzS30k/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/WwV1ikzS30k/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'Sonyakisa8 TT',
        liveBroadcastContent: 'none',
        publishTime: '2023-06-16T12:06:05Z',
      },
    },
  ],
};
