import { userManagement } from './data';

export function isLibrarian(data: userManagement, email: string): boolean {
  return email in data.librariansByEmail;
}

export function isSuperMember(data: userManagement, email: string): boolean {
  return data.membersByEmail[email]?.isSuper;
}

export function isVIPMember(data: userManagement, email: string): boolean {
  return data.membersByEmail[email]?.isVIP;
}
