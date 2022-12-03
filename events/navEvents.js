import {
  getAllWords, wordsCSS, wordsHTML, wordsJS
} from '../api/vocabwordsData';
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

  // FILTERS words by CSS
  document.querySelector('#words-CSS').addEventListener('click', () => {
    wordsCSS().then(showVocabWords);
  });

  document.querySelector('#words-HTML').addEventListener('click', () => {
    wordsHTML().then(showVocabWords);
  });

  document.querySelector('#words-JavaScript').addEventListener('click', () => {
    wordsJS().then(showVocabWords);
  });
};

export default navigationEvents;
