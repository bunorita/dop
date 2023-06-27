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
  userId: number,
  memberId: number
): bookLending[] {
  if (
    isLibrarian(data.userManagement, userId) ||
    isSuperMember(data.userManagement, userId)
  ) {
    return catalogGetBookLendings(data.catalog, memberId);
  }
  throw 'Not allowed to get book lendings'; // TODO: want to return error
}

export function addBookItem(
  data: Library,
  userId: number,
  itemInfo: bookItemInfo
): void {
  if (
    isLibrarian(data.userManagement, userId) ||
    isVIPMember(data.userManagement, userId)
  ) {
    return catalogAddBookItem(data.catalog, itemInfo);
  }
  throw 'Not allowed to add a book item'; // TODO: want to return error
}
