import { userManagementData } from './data';

export function isLibrarian(data: userManagementData, userId: number): boolean {
  return true;
}

export function isSuperMember(
  data: userManagementData,
  userId: number
): boolean {
  return true;
}

export function isVIPMember(data: userManagementData, userId: number): boolean {
  return true;
}
