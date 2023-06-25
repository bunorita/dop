import { addBookItem } from './catalog';
import { getBookLendings } from './library';

const data = { userManagement: {}, catalog: {} };
getBookLendings(data, 1, 1);
addBookItem(data.catalog, {});
console.log('done');
