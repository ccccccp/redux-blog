import 'whatwg-fetch';
const isDeveloment = location.origin.match(/(localhost)|(127.0.0.1)/);
const ajaxOrigin = ''
const stringifyParams = (data) => {
    return Object.keys(data).map((key) => {
        const val = data[key];
        return `${key}=${val}`
    }).join("&")
}
// 基础原始get
const baseFetchGet = async (fullUrl, params) => {
    const sourceData = await fetch(`${fullUrl}?${stringifyParams(params)}`);
    return await sourceData.json();
}
export const createFetchGet = (mockOrigin) => {
    if (isDeveloment) {
        return async (url, params={}) => {
            const sourceData = await fetch(`${mockOrigin}${url}?${stringifyParams(params)}`);
            return await sourceData.json();
        }
    }
    return async (path, params) => {
        return await baseFetchGet(ajaxOrigin + path, params)
    }
}
export default async (path, params = {}) => {
    return await baseFetchGet(ajaxOrigin + path, params);
}