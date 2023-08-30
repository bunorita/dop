export function get(obj: object, path: string[]) {
  let res: any = obj;
  for (let key of path) {
    res = res[key];
  }
  return res;
}
