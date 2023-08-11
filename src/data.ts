export type Library = {
  name: string;
  address: string;
  catalog: Catalog;
  userManagement: userManagement;
};

export type Catalog = {
  booksByIsbn: { [key: isbn]: Book };
  authorsById: { [key: authorId]: Author };
};
export type Book = {
  isbn: isbn;
  title: string;
  publicationYear: number;
  authorIds: authorId[];
  bookItems: bookItem[];
};
type isbn = string;
export type Author = {
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
  librariansByEmail: { [key: email]: librarian };
  membersByEmail: { [key: email]: member };
};
type librarian = { email: email; encryptedPassword: string };
type member = {
  email: email;
  encryptedPassword: string;
  isVIP: boolean;
  isSuper: boolean;
  isBlocked: boolean;
  bookLendings: bookLending[];
};
type email = string;
type date = string;
