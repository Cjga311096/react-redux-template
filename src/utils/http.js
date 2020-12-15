import axios from 'axios';

export const get = (url, headers, params = {}) => new Promise((resolve, reject) => {
  axios.get(url, {
    headers: {
      ...headers
    },
    params: {
      ...params
    }
  }).then(res => resolve(handleResponse(res))).catch(err => reject(handleError(err)));
});

export const post = (url, headers, body) => new Promise((resolve, reject) => {
  axios.post(url,
    {
      ...body
    },
    {
      headers: {
        ...headers
      }
    }
  ).then(res => resolve(handleResponse(res))).catch(err => reject(handleError(err)));
});

export const put = (url, headers, data) => new Promise((resolve, reject) => {
  axios({
    method: 'put',
    url,
    headers,
    data: { ...data }
  }).then(res => resolve(handleResponse(res))).catch(err => reject(handleError(err)));
});

export const Delete = (url, headers = {}, body = {}) => new Promise((resolve, reject) => {
  axios({
    method: 'delete',
    url,
    headers,
    data: { ...body }
  }).then(res => resolve(handleResponse(res))).catch(err => reject(handleError(err)));
});


const handleError = (error) => {
  try {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response.data.message;

    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return error.request.message;
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message;
    }
  } catch (error) {
    return error.message;
  }

}

const handleResponse = (res) => {
  return res.data;
}