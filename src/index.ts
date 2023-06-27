import { addBookItem } from './catalog';
import { Author, Book, Catalog, Library } from './data';
import { getBookLendings } from './library';

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
    librariansByEmail: [],
    membersByEmail: [],
  },
};
getBookLendings(library, 1, 1);
addBookItem(library.catalog, {});

console.log(JSON.stringify(library, null, 2));
console.log('done');
