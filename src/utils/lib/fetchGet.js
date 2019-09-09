import 'whatwg-fetch';
const ajaxOrigin = '';
const stringifyParams = (data) => {
  return Object.keys(data).map((key) => {
    const val = data[key];
    return `${key}=${val}`
  }).join("&")
}
// 基础原始get
const baseFetchGet = async (fullUrl, params,options) => {
  const sourceData = await fetch(`${fullUrl}?${stringifyParams(params)}`);
    return sourceData.json().then((res) => {
      if (res.errcode === 0 || res.code ===200) {
        return Promise.resolve(res);
      } else {
        return Promise.reject(res);
      }
    }).catch((err) => {
      return Promise.reject(err)
    })

}
export const createFetchGet = baseFetchGet;
export default async (path, params = {}) => {
  return await baseFetchGet(ajaxOrigin + path, params);
}