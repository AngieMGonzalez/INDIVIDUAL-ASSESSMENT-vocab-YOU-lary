import { createVocabWord, getAllWords, updateVocabWord } from '../api/vocabwordsData';
import showVocabWords from '../pages/words';
import dateString from '../utils/timeSubmitted';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A vocabword
    if (e.target.id.includes('submit-word')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value,
        timeSubmitted: dateString, // timestamp
        uid: user.uid
        // lang_id vs. langTech
      };

      createVocabWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabWord(patchPayload).then(() => {
          getAllWords(user.uid).then(showVocabWords);
        });
      });
    }

    // CLICK EVENT FOR EDITING/UPDATING A word
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        langTech: document.querySelector('#langTech').value, // error at value
        timeSubmitted: dateString,
        firebaseKey,
        uid: user.uid
      };

      updateVocabWord(payload).then(() => {
        getAllWords(user.uid).then(showVocabWords);
      });
    }
    // el fin
  });
};

export default formEvents;
