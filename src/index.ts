import * as _ from 'lodash';
import { addBookItem } from './catalog';
import { Author, Book, Catalog, Library } from './data';
import { getBookLendings, searchBooksByTitleJSON } from './library';

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

const library: Library = {
  name: 'NYPL',
  address: '476 Fifth Avenue, Manhattan, New York City, 10018, United States',
  catalog: catalog,
  userManagement: {
    librariansByEmail: {
      'franck@gmail.com': {
        email: 'franck@gmail.com',
        encryptedPassword: 'bXlwYXNzd29yZA==',
      },
    },
    membersByEmail: {
      'samantha@gmail.com': {
        email: 'samantha@gmail.com',
        encryptedPassword: 'c2VjcmV0',
        isVIP: false,
        isSuper: true,
        isBlocked: false,
        bookLendings: [
          {
            bookItemId: 'book-item-1',
            bookIsbn: '978-17795011227',
            lendingDate: '2020-04-23',
          },
        ],
      },
    },
  },
};
console.log(getBookLendings(library, 'samantha@gmail.com', 1));
addBookItem(library.catalog, {});

console.log(_.get(library.catalog, ['booksByIsbn', '978-1779501127', 'title']));
console.log(
  _.get(library, ['catalog', 'authorsById', 'alan-moore', 'bookIsbns', '0'])
);

console.log(searchBooksByTitleJSON(library, 'Wat'));

console.log('done');

function get(obj: object, path: string[]) {
  let res: any = obj;
  for (let key of path) {
    res = res[key];
  }
  return res;
}
