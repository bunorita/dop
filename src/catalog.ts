import { Book, bookItemInfo, bookLending, Catalog } from './data';

export function searchBooksByTitle(catalog: Catalog, query: string) {
  const books = Object.values(catalog.booksByIsbn);
  const matchingBooks = books.filter((book) => book.title.includes(query));
  return matchingBooks.map((book) => bookInfo(catalog, book));
}

export function bookInfo(catalog: Catalog, book: Book) {
  return {
    title: book.title,
    isbn: book.isbn,
    authorNames: authorNames(catalog, book),
  };
}

function authorNames(catalog: Catalog, book: Book): string[] {
  return book.authorIds.map((authorId) => {
    return catalog.authorsById[authorId].name;
  });
}

export function getBookLendings(
  data: Catalog,
  memberId: number
): bookLending[] {
  return [];
}

export function addBookItem(data: Catalog, itemInfo: bookItemInfo): void {
  return;
}
