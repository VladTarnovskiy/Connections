import { Card } from '../models/card.model';
import { SortData } from '../types/sort';

export const sort = (sortData: SortData, cards: Card[]) => {
  const { sortBy, direction } = sortData;
  let sortedData = [];
  if (sortBy === 'view') {
    if (direction === 'asc') {
      sortedData = sortByViewAsc(cards);
    } else {
      sortedData = sortByViewDesc(cards);
    }
  } else {
    if (direction === 'asc') {
      sortedData = sortByDateAsc(cards);
    } else {
      sortedData = sortByDateDesc(cards);
    }
  }
};

const sortByViewAsc = (cards: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(cards)).sort((a: Card, b: Card) => {
    return Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
  });
  return sorted;
};

const sortByViewDesc = (cards: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(sortByViewAsc(cards).reverse()));
  return sorted;
};

const sortByDateAsc = (cards: Card[]) => {
  const sorted = JSON.parse(JSON.stringify(cards)).sort(function (
    a: Card,
    b: Card
  ) {
    return (
      Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt)
    );
  });
  return sorted;
};

const sortByDateDesc = (cards: Card[]) => {
  return JSON.parse(JSON.stringify(sortByDateAsc(cards).reverse()));
};
