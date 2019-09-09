const qs = require("qs")
const get = function (url, params={}, options={}) {
  const search = qs.stringify(params) ? url + '?' + qs.stringify(params) : url;

  return fetch(search)
    .then(function (response) {
      return response.json()
    })
}

export default get