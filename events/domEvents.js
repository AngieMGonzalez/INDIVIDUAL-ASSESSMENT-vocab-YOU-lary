import { deleteVocabWord, getAllWords, getSingleVocabWord } from '../api/vocabwordsData';
import addWordForm from '../components/forms/addWordForm';
import showVocabWords from '../pages/words';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE word', e.target.id);
        // console.warn(e.target.id.split('--'));
        // console.warn(getAllWords());
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocabWord(firebaseKey).then(() => {
          getAllWords(user.uid).then(showVocabWords); // we call it inside of delete word cause it needs to go in sequence ?
        }); // we don't want to erase conditioning ?
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A vocab word
    if (e.target.id.includes('add-word-btn')) {
      console.warn('ADD word');
      addWordForm(user.uid);
    }

    // CLICK EVENT EDITING/UPDATE A word // item.firebaseKey
    if (e.target.id.includes('edit-word-btn')) {
      console.warn('EDIT word', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--'); // if this is problem

      getSingleVocabWord(firebaseKey).then((wordObj) => addWordForm(user.uid, wordObj));
      // it is expecting as the first parameter, the userid, but im passing it the whole object
      // get single book param in api bookData.js
      // getSingleVocabWord(firebaseKey).then(addWordForm);
      // using the callback method
    }
    // el fin
  });
};

export default domEvents;
