const post = function(url,params={},options={}){
  return fetch(url, {
    body: JSON.stringify(params),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    ...options
  }).then((response)=>{
    return response.json()
  })
}

export default post