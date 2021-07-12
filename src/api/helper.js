import axios from 'axios';

export const configureInterceptor = () => { };

export const getHeader = () => {
    return {
        // 'Content-Type': 'multipart/form-data',
        // 'X-API-VERSION': '1.4.24',
        'X-API-VERSION': '1.3',
        // exchangeid: 2,
        exchangeid: 1,
        language: 'en',
        source: '2',
    };
};

export const getFullUrl = (endpoint) => {
    return 'https://jsonplaceholder.typicode.com/' + endpoint;
};

export const fetchApi = (method, endpoint, params, headers) =>
    axios({
        method,
        headers: headers || getHeader(),
        url: getFullUrl(endpoint),
        data: params,
    })
    .then(response => ({ response }))
    .catch(error => ({ error }));

