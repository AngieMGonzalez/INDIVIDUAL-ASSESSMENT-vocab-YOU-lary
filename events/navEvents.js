import { getAllWords } from '../api/vocabwordsData';
import showVocabWords from '../pages/words';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL words
  document.querySelector('#all-words').addEventListener('click', () => {
    console.warn('CLICKED ALL words');
    getAllWords().then(showVocabWords);
  });
};

export default navigationEvents;
