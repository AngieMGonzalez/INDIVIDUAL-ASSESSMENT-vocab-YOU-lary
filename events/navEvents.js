import {
  getAllWords, wordsCSS, wordsHTML, wordsJS
} from '../api/vocabwordsData';
import showVocabWords from '../pages/words';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL words
  document.querySelector('#all-words').addEventListener('click', () => {
    getAllWords(user.uid).then(showVocabWords);
  });

  // FILTERS words by CSS
  document.querySelector('#words-CSS').addEventListener('click', () => {
    wordsCSS(user.uid).then(showVocabWords);
  });

  document.querySelector('#words-HTML').addEventListener('click', () => {
    wordsHTML(user.uid).then(showVocabWords);
  });

  document.querySelector('#words-JavaScript').addEventListener('click', () => {
    wordsJS(user.uid).then(showVocabWords);
  });
};

export default navigationEvents;
