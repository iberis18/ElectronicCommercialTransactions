import { baseUrl } from "../../const";

// const data = fetchNewWord(); 
// console.log(data);

export const get = (url) => {
   return fetch(`${baseUrl}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
  .then(response => response.json())
  .catch(error => console.log(error.message));
};

export const post = (url, body) => {
  return fetch(`${baseUrl}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      accept: "application/json",
    },
    body: JSON.stringify(body),
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error.message));
};

export const postFile = (url, body) => {
  return fetch(`${baseUrl}${url}`, {
    method: "POST",
      headers: {
        accept: "application/json",
      },
      body: body,
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error.message));
};

export const put = (url, body) => {
  return fetch(`${baseUrl}${url}`, {
    method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        accept: "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error.message));
};

export const del = (url, body) => {
  return fetch(`${baseUrl}${url}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json;charset=utf-8",
        Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  })
  .then(response => response.json())
  .then(response => response.data)
  .catch(error => console.log(error.message));
};
