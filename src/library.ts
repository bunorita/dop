import { bookItemInfo, bookLending, Library } from './data';
import { isLibrarian, isSuperMember, isVIPMember } from './userManagement';
import {
  getBookLendings as catalogGetBookLendings,
  addBookItem as catalogAddBookItem,
  searchBooksByTitle,
} from './catalog';

export function searchBooksByTitleJSON(
  library: Library,
  query: string
): string {
  const results = searchBooksByTitle(library.catalog, query);
  return JSON.stringify(results, null, 2);
}

export function getBookLendings(
  data: Library,
  email: string,
  memberId: number
): bookLending[] {
  if (
    isLibrarian(data.userManagement, email) ||
    isSuperMember(data.userManagement, email)
  ) {
    return catalogGetBookLendings(data.catalog, memberId);
  }
  throw 'Not allowed to get book lendings'; // TODO: want to return error
}

export function addBookItem(
  data: Library,
  email: string,
  itemInfo: bookItemInfo
): void {
  if (
    isLibrarian(data.userManagement, email) ||
    isVIPMember(data.userManagement, email)
  ) {
    return catalogAddBookItem(data.catalog, itemInfo);
  }
  throw 'Not allowed to add a book item'; // TODO: want to return error
}
