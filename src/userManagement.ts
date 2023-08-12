import { set } from 'lodash';
import { userManagement, member } from './data';

export function isLibrarian(data: userManagement, email: string): boolean {
  return email in data.librariansByEmail;
}

export function isSuperMember(data: userManagement, email: string): boolean {
  return data.membersByEmail[email]?.isSuper;
}

export function isVIPMember(data: userManagement, email: string): boolean {
  return data.membersByEmail[email]?.isVIP;
}

export function addMember(
  data: userManagement,
  member: member
): userManagement {
  if (member.email in data.membersByEmail) {
    throw 'Member already exists.';
  }
  return set(data, ['member', 'membersByEmail', member.email], member);
}
