import client from '../utils/client';

const endpoint = client.databaseURL;

// GET all vocabwords
const getAllWords = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords.json?orderBy="uid"&equalTo="${uid}"`, {
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

// DELETE vocabword
const deleteVocabWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: GET SINGLE vocabword
const getSingleVocabWord = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    // .then((data) => resolve(Object.values(data))) Any time we are getting a single item back from Firebase, it will return the object we need so we just need to resolve the data and not manipulate it.
    .catch(reject);
});

// TODO: CREATE new vocabword
const createVocabWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// TODO: UPDATE vocabword
const updateVocabWord = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords/${payload.firebaseKey}.json`, {
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

// filter by LangTech for navigation: CSS-words
const wordsCSS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const wordsByCSS = Object.values(data).filter((item) => item.langTech === 'CSS');
        resolve(wordsByCSS);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// filter words by words-JavaScript
const wordsJS = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const wordsByJS = Object.values(data).filter((item) => item.langTech === 'JavaScript');
        resolve(wordsByJS);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// FILTER words-HTML
const wordsHTML = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const wordsByHTML = Object.values(data).filter((item) => item.langTech === 'HTML');
        resolve(wordsByHTML);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export {
  getAllWords,
  createVocabWord,
  deleteVocabWord,
  getSingleVocabWord,
  updateVocabWord,
  wordsCSS,
  wordsHTML,
  wordsJS
};
