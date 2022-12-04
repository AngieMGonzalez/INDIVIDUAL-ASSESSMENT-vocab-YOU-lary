import { getAllWords } from '../api/vocabwordsData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navEvents';
import showVocabWords from '../pages/words';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);

  getAllWords(user.uid).then((words) => showVocabWords(words));
};

export default startApp;
