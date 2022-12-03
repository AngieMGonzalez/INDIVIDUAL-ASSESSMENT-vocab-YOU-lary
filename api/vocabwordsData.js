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
const deleteVocabWord = () => {};

// TODO: GET SINGLE vocabword
const getSingleVocabWord = () => {};

// TODO: CREATE new vocabword
const createVocabWord = () => {};

// TODO: UPDATE vocabword
const updateVocabWord = () => {};

export {
  getAllWords,
  createVocabWord,
  deleteVocabWord,
  getSingleVocabWord,
  updateVocabWord
};
