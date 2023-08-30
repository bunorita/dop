import { Book, Author, Catalog } from './data';
import { get } from './util';
import { get as loGet } from 'lodash';

describe('get', () => {
  const path = ['booksByIsbn', '978-1779501127', 'title'];
  const want = 'Watchmen';

  test('get', () => {
    const got = get(catalog, path);
    expect(got).toBe(want);
  });

  test('lodash get', () => {
    const got = loGet(catalog, path);
    expect(got).toBe(want);
  });
});

const watchmenBook: Book = {
  isbn: '978-1779501127',
  title: 'Watchmen',
  publicationYear: 1987,
  authorIds: ['alan-moore', 'dave-gibbons'],
  bookItems: [
    {
      id: 'book-item-1',
      libid: 'nyc-central-lib',
      isLent: true,
      purchaseDate: '1988-01-01',
    },
    {
      id: 'book-item-2',
      libid: 'nyc-central-lib',
      isLent: false,
      purchaseDate: '1988-04-01',
    },
  ],
};

const alanMoore: Author = {
  id: 'alan-moore',
  name: 'Alan Moore',
  bookIsbns: ['978-1779501127'],
};
const daveGibbons: Author = {
  id: 'dave-gibbons',
  name: 'Dave Gibbons',
  bookIsbns: ['978-1779501127'],
};

const catalog: Catalog = {
  booksByIsbn: {
    '978-1779501127': watchmenBook,
  },
  authorsById: {
    'alan-moore': alanMoore,
    'dave-gibbons': daveGibbons,
  },
};
