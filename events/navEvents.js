import { signOut } from '../utils/auth';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // ALL words
  document.querySelector('#all-words').addEventListener('click', () => {
    console.warn('CLICKED ALL words');
  });
};

export default navigationEvents;
