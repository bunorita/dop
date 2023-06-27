import { userManagement } from './data';

export function isLibrarian(data: userManagement, userId: number): boolean {
  return true;
}

export function isSuperMember(data: userManagement, userId: number): boolean {
  return true;
}

export function isVIPMember(data: userManagement, userId: number): boolean {
  return true;
}
