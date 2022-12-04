import renderToDOM from '../../utils/renderToDom';
import getLangTechs from '../../api/languagesData';

const selectLang = (uid, languageId) => {
  let domString = `
  <label for="languages">Select Language/Tech</label>
  <select class="form-control" id="languages" required>
  <option value="">Select Language/Tech</option>`;

  getLangTechs(uid).then((langArray) => {
    langArray.forEach((langObj) => {
      domString += `
      <option 
        value="${langObj.firebaseKey}" ${languageId === langObj.firebaseKey ? 'selected' : ''}>
          ${langObj.language}
      </option>`;
    }); // languages vs words properties/values
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};

export default selectLang;
