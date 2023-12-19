import { BASE_URL } from "../../const";

export const get = (url) => {
   return fetch(`${BASE_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
  .then(response => response.json())
  .catch(error => console.log(error.message));
};

export const post = (url, body) => {
  return fetch(`${BASE_URL}${url}`, {
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
  return fetch(`${BASE_URL}${url}`, {
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
  return fetch(`${BASE_URL}${url}`, {
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
  return fetch(`${BASE_URL}${url}`, {
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
