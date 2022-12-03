import { createVocabWord, getAllWords, updateVocabWord } from '../api/vocabwordsData';
import showVocabWords from '../pages/words';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A vocabword
    if (e.target.id.includes('submit-word')) {
      console.warn('CLICKED SUBMIT vocabword', e.target.id);

      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        lang_id: document.querySelector('#lang_id').value,
      };

      console.warn(payload);
      createVocabWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabWord(patchPayload).then(() => {
          getAllWords().then(showVocabWords);
        });
      });
    }

    // CLICK EVENT FOR EDITING/UPDATING A word
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE word', e.target.id);
      console.warn(firebaseKey);
    }

    // el fin
  });
};

export default formEvents;
