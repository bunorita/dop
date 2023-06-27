export type libraryData = {
  name: string;
  address: string;
  catalog: catalog;
  userManagement: userManagement;
};

export type catalog = {
  booksByIsbn: isbn[];
  authorsById: authorId[];
};
type book = {
  isbn: isbn;
  title: string;
  publicationYear: number;
  authorIds: authorId[];
  bookItems: bookItem[];
};
type isbn = string;
type author = {
  id: authorId;
  name: string;
  bookIsbns: isbn[];
};
type authorId = string;
type bookItem = {
  id: bookItemId;
  libid: string;
  purchaseDate: date;
  isLent: boolean;
};
type bookItemId = string;
export type bookLending = {
  lendingDate: date;
  bookItemId: bookItemId;
  bookIsbn: isbn;
};
export type bookItemInfo = {};

export type userManagement = {
  librariansByEmail: email[];
  membersByEmail: email[];
};
type librarian = { email: email; encryptedPassword: string };
type member = {
  email: email;
  encryptedPassword: string;
  isBlocked: boolean;
  bookLendings: bookLending[];
};
type email = string;
type date = string;
