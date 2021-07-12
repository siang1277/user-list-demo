import { fetchApi } from './helper';

export const userList = () => {
    let userList = fetchApi('get', 'users');
    console.log('User List: ', userList);
    return userList;
};
