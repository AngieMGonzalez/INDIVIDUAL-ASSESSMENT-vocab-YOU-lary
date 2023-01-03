import { getLangTechs } from '../../api/languagesData';
import renderToDOM from '../../utils/renderToDom';

const selectLang = (uid, obj = {}) => {
  let domString = `
  <label for="languages">Select Language/Tech</label>
  <select class="form-control" id="langTech" required>
  <option value="OTHER">Select Language/Tech</option>`;

  getLangTechs(uid).then((langArray) => {
    langArray.forEach((langObj) => {
      console.warn('langObj', langObj);
      console.warn('langObj.language', langObj.language);
      domString += `
      <option 
        value="${langObj.language}" ${langObj === obj.langTech ? 'selected' : ''}>
          ${langObj.langTech}
      </option>`;
    }); // languages vs words properties/values: CHECK DATA
    domString += '</select>';
    renderToDOM('#select-language', domString);

    console.warn('langArray', langArray);

    if (obj.langTech) {
      document.querySelector('#langTech').value = obj.langTech;
    } else {
      document.querySelector('#langTech').value = 'OTHER';
    }
  });
};

export default selectLang;
