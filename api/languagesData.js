import client from '../utils/client';

const endpoint = client.databaseURL;

// GET all LANGUAGES/technology
const getLangTechs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langtech.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// create a language/technology
const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langtech.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// update a language/technology
const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/langtech/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getLangTechs, createLanguage, updateLanguage };
