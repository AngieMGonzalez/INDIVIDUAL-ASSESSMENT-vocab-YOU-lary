import client from '../utils/client';

const endpoint = client.databaseURL;

// GET all vocabwords
const getAllWords = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocabwords.json`, {
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
    .then((data) => resolve(data))
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

export {
  getAllWords,
  createVocabWord,
  deleteVocabWord,
  getSingleVocabWord,
  updateVocabWord
};
