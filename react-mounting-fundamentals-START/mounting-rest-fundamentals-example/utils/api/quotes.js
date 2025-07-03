import {BASE_URL } from './base.js'

const getRandomQuote = () => {
  return fetch(`${BASE_URL}/random`)
    .then((response)=> {
      return response.json()
    }).then((data)=> {
      return Promise.resolve(data)
    })
}
// OR
/*
const getRandomQuote = () => {
  return fetch(`${BASE_URL}/random`)
    .then((response)=> {
      return response.json()
    })
}*/
// OR
/*
const getRandomQuote = async () => {
  const response = await fetch(`${BASE_URL}/random`);
  const data = await response.json();
  return data;
};*/

export { getRandomQuote }