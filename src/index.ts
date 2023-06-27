import { addBookItem } from './catalog';
import { getBookLendings } from './library';

const library = {
  name: 'NDL',
  address: 'Nagatachō, Chiyoda City, Tokyo',
  catalog: {
    booksByIsbn: [],
    authorsById: [],
  },
  userManagement: {
    librariansByEmail: [],
    membersByEmail: [],
  },
};
getBookLendings(library, 1, 1);
addBookItem(library.catalog, {});
console.log('done');
